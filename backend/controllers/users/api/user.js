const db = require('../../../models');
const {sequelize,Sequelize} = require('../../../models');
const { QueryTypes } = require('sequelize');
const bcryptjs = require('bcryptjs');
const datetime = require('../datetime');
const encryptToken = require('../encrypt');

const loginUser = async (req,res) => {
    const body = req.body;
    const result = await sequelize.query('SELECT * FROM member WHERE email = ?', {
        replacements: [body.email],
        type: QueryTypes.SELECT,
    });
    if (!Object.keys(result).length){
        res.status(400).json({message :`user not found !!`})
    }else{
        const dePass = bcryptjs.compareSync(body.pass,result[0].password);
        if(!dePass){
            res.status(400).send({message: "Username or Password is wrong !!"})
        }else{
            const encoded = await encryptToken.encoded({email: result[0].email,typeRole: 'member'})
            const reEncoded = await encryptToken.reEncoded({email: result[0].email,typeRole: 'member'})
            await db.Member.update({
                update_date: datetime.today()
            },{
                where: {uid:result[0].uid,email:result[0].email}
            })
            res.status(200).json({accessToken: encoded,refreshToken: reEncoded,typeRole: 'member',message :`user => ${result[0].email} login OK !!`})
        }
    }
};
const registerUser = async (req,res) => {
    const body = req.body;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
        return res.status(400).send({
            message: 'Invalid email format'
        })
    }
    let result = await sequelize.query('SELECT uid FROM member WHERE email = ?', {
        replacements: [body.email],
        type: QueryTypes.SELECT,
    });
    if (Object.keys(result).length){
        return res.status(400).send({message : `Have ${body.email} already !!`})
    }else{
        result = await db.Member.create({
            email: body.email,
            password: bcryptjs.hashSync(body.conf_pass,bcryptjs.genSaltSync(12)),
            update_date: datetime.today()
        });
        return res.status(201).send({message: 'Register successfully !!'})
    }
};
const authToken = async (req,res) => {
    if (!req.headers["authorization"]) return res.sendStatus(401)
        const verifyed = await encryptToken.reDecoded(req.headers.authorization.split(' ')[1]);
        if(verifyed.err){
            res.status(401).send({error: verifyed.err})
        }else{
            const reEncoded = await encryptToken.reEncoded({email: verifyed.email,typeRole: verifyed.typeRole})
            res.status(201).send({refreshToken: reEncoded,typeRole: verifyed.typeRole})
        }
} 
module.exports = {
    loginUser,
    registerUser,
    authToken
};