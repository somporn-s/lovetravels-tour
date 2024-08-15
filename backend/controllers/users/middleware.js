
const encryptToken = require('./encrypt');
const datetime = require('./datetime')
const checkMemberToken = (req, res, next) => {
  try{
    const token = req.headers.authorization.split(' ')[1]
    const verifyed = encryptToken.decoded(token);
    next();
  }catch(err){
    res.status(401).json({status:'error',message:err.message})
  }
}
const checkRefreshMemberToken = () => {
  if (!req.headers["authorization"]) return res.sendStatus(401)
  const verifyed = encryptToken.reDecoded(req.headers.authorization.split(' ')[1]);
console.log(verifyed)
}
module.exports = {
    checkMemberToken,
};