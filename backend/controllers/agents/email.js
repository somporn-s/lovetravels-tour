const nodemailer = require('nodemailer')
const sender = async (receiver) => {

    const transporter = nodemailer.createTransport(senderConfig.zoho);
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