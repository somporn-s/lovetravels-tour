const db = require('../../../models');
const {sequelize,Sequelize} = require('../../../models');
const { QueryTypes } = require('sequelize');
const nodemailer = require('nodemailer');
const bcryptjs = require('bcryptjs');
const datetime = require('../datetime');
const encryptToken = require('../encrypt');

const loginAgent = async (req,res) => {
    const body = req.body;
    const result = await sequelize.query('SELECT * FROM agent WHERE username = ?', {
        replacements: [body.user],
        type: QueryTypes.SELECT,
    });
    if (!Object.keys(result).length){
        res.status(400).send({message :`agent not found !!`})
    }else{
        const dePass = bcryptjs.compareSync(body.pass,result[0].password);
        if(!dePass){
            res.status(400).send({message: "Username or Password is wrong !!"})
        }else{
            const encoded = await encryptToken.encoded({username: result[0].username,typeRole: 'agent'})
            const reEncoded = await encryptToken.reEncoded({username: result[0].username,typeRole: 'agent'})
            await db.Agent.update({
                update_date: datetime.today()
            },{
                where: {username:result[0].username}
            })
            res.status(200).json({accessToken: encoded,refreshToken: reEncoded,typeRole: 'agent',message :`agent => ${result[0].username} login OK !!`})
        }
    }
}
const registerAgent = async (req,res) => {
    const body = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
        return res.status(400).send({
            message: 'Invalid email format'
        })
    }
    let result = await sequelize.query('SELECT license_id FROM agent WHERE license_id = ? OR username = ? OR email = ?', {
        replacements: [body.license,body.username,body.email],
        type: QueryTypes.SELECT,
    });
    if (Object.keys(result).length){
        return res.status(400).send({message : `Have ${body.email} already !!`})
    }else{
        result = await db.Agent.create({
            license_id: body.license,
            username: body.username,
            password: bcryptjs.hashSync(body.conf_pass,bcryptjs.genSaltSync(12)),
            email: body.email,
            company_name: body.company,
            tel: body.phone,
            // pic_payment_path: body.payment,
            update_date: datetime.today()
        });
        return res.status(201).send({message: 'Register successfully !!'})
    }
}
module.exports = {
    loginAgent,
    registerAgent
}