const getAllBooking = async (req,res) => {
    res.status(200).send('booking ok !!')
}
const uploadPic = async (req,res) => {
    //console.log(req.file)
    res.status(200).send('upload ok !!')
}
module.exports = {
    getAllBooking,
    uploadPic
}