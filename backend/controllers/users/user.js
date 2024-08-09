const loginUser = async (req,res) => {
    const {username,password} = req.body
    console.log(req.body)
    res.status(200).send(`user => ${username} login OK !!`)
};
const registerUser = async (req,res) => {
    res.status(200).send("register OK !!")
};
module.exports = {
    loginUser,
    registerUser
};