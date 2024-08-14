
const encryptToken = require('./encrypt');
const datetime = require('./datetime')
const checkMemberToken = (req, res, next) => {
  console.log()
  if(typeof(req.headers.authorization) !== 'undefined'){
    const verifyed = encryptToken.decoded(req.headers.authorization.split(' ')[1]);
    console.log(verifyed)
  }else{
    
  }
  next();
}
const checkRefreshMemberToken = () => {
  if (!req.headers["authorization"]) return res.sendStatus(401)
  const verifyed = encryptToken.reDecoded(req.headers.authorization.split(' ')[1]);
console.log(verifyed)
}
module.exports = {
    checkMemberToken,
};