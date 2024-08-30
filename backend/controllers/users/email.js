require('dotenv').config();
const nodemailer = require('nodemailer')
const sender = async (receiver) => {
const senderConfig = {
    gmail : {
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_EMAIL_SENDER,
            pass: process.env.GMAIL_PASS_SENDER,
        }
    },
    zoho : {
        service:'zoho',
        host:'smtp.zoho.com',
        port:465,
        secure: true,
        auth: {
            user: process.env.ZOHO_EMAIL_SENDER,
            pass: process.env.ZOHO_PASS_SENDER,
        }
    }
}
    const transporter = nodemailer.createTransport(senderConfig.gmail);
    const info = await transporter.sendMail({
      from: senderConfig.gmail.auth.user, // อีเมล์ของผู้ส่ง
      to: receiver.receive, // อีเมล์ผู้รับ
      subject: receiver.subject, // หัวข้อของเมล์
      text: receiver.message, // ส่วนของเนื้อหา
      html: receiver.message,
    }).then((res) => {
        return {success : res.messageId}
    }).catch((err) => {
        return {error : err.response}
    });
    return info
}
module.exports = {
    sender
}