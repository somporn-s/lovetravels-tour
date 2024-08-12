
const encryptToken = require('./encrypt');
const datetime = require('./datetime')
const checkMemberToken = async (req, res, next) => {
  console.log()
  if(typeof(req.headers.authorization) !== 'undefined'){
    const verifyed = await encryptToken.decoded(req.headers.authorization.split(' ')[1]);
    console.log(verifyed)
  }else{
    
  }
  next();
}
module.exports = {
    checkMemberToken,
};