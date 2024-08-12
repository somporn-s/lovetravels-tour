
const encryptToken = require('./encrypt');
const datetime = require('./datetime')
const checkUserToken = async (req, res, next) => {
  console.log('Time:', datetime.today())
  // if(!req.body.token || req.body.token !== 'undefined'){
  //   const verifyed = await encryptToken.decoded(req.body.token);
  // }else{
    
  // }
  next();
}
module.exports = {
    checkUserToken,
};