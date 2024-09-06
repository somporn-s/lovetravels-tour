
const db = require('../../../models');
const {sequelize,Sequelize} = require('../../../models');
const { QueryTypes } = require('sequelize');
const encryptToken = require('../encrypt');
const datetime = require('../datetime');

const addPackageTour = async (req,res) => {
    const body = req.body;
    const pic = req.files
    const token = req.headers.autherization.split(' ')[1]
    if(!token){
        return res.status(401).send({message : 'No Autherization Token'})
    }else{
        const reDecoded = await encryptToken.reDecoded(token)
        if(reDecoded.err){
            res.status(401).send({message : reDecoded.err})
        }else{
            console.log(reDecoded.username)
            const resultAgent = await sequelize.query('SELECT * FROM agent WHERE username = ? LIMIT 1', {
            replacements: [reDecoded.username],
            type: QueryTypes.SELECT,
            });
            if (!Object.keys(result).length){
                res.status(400).send({message : 'Agent not found '})
            }else{
                const resultPackage = await db.Package.create({
                    package_name:body.packageName,
                    description:body.description,
                    max_amount:body.maxPersons,
                    company_name:resultAgent[0].company_name,
                    price_person:body.price,
                    discount:body.priceDiscount,
                    start_date:body.startDate,
                    end_date:body.endDate,
                    update_date: datetime.today(),
                    license_id: resultAgent[0].license_id

                })
                // let typeName = 'main'
                // await Promise.all(pic.map(async (file) => {
                //         result = await db.Gallery.create({
                //             pic_path: file.originalname,
                //             type:typeName,
                //             update_date: datetime.today(),
                //             package_id: 1
                //     });
                //     typeName = 'other'
                // }));
                res.status(200).send("add package ok !!")
            }
        }
    }
}
module.exports = {
    addPackageTour
}