const email = require('../email')
const getAllBooking = async (req,res) => {
    res.status(200).send('booking ok !!')
}
const uploadPic = async (req,res) => {
    //Math.random().toFixed(8)*100000000
    const status = await email.sender({receive: 'seawaysia@gmail.com',subject:'Lovetravels Verify OTP',message:'OTP : <b>123456789</b>'})
    status.error ? res.status(400).send(status.error) : res.status(200).send("Email Sent!!")
  } 
module.exports = {
    getAllBooking,
    uploadPic
}