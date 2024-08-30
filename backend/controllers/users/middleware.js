
const encryptToken = require('./encrypt');
const {body} = require('express-validator')
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
const validationLogin = () => {
  return [
    body('email').trim().not().isEmpty().withMessage('Invalid Email does not Empty'),
    body('email').trim().isEmail().withMessage('Invalid Email Address'),
    body('pass').trim().not().isEmpty().withMessage('Invalid Password does not Empty'),
    body('pass').trim().isLength({min:5}).withMessage('The minimum password length is 5 characters'),
    body('pass').trim().isLength({max:12}).withMessage('The maximum password length is 12 characters'),
    body('pass').trim().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/).withMessage('The Password Invalid'),
  ]
}
module.exports = {
    checkMemberToken,
    validationLogin,
};