
const encryptToken = require('./encrypt');

const checkUserToken = async (req, res, next) => {
  console.log('Time:', Date.now())
  // if(!req.body.token || req.body.token !== 'undefined'){
  //   const verifyed = await encryptToken.decoded(req.body.token);
  // }else{
    
  // }
  next();
}
module.exports = {
    checkUserToken,
};