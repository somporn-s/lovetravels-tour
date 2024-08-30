
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
    body('email').trim().not().isEmpty().withMessage('Invalid Email does not Empty')
    .isEmail().withMessage('Invalid Email Address')
    .exists({checkFalsy: true}).withMessage('You must type a password'),
    body('pass').trim().not().isEmpty().withMessage('Invalid Password does not Empty')
    .isLength({min:5}).withMessage('The minimum password length is 5 characters')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/).withMessage('The Password Invalid')
    .exists({checkFalsy: true}).withMessage('You must type a password'),
  ]
}
const validationRegis = () => {
  return [
    body('email').trim().not().isEmpty().withMessage('Invalid Email does not Empty')
    .isEmail().withMessage('Invalid Email Address')
    .exists({checkFalsy: true}).withMessage('You must type a email'),
    body('pass').trim().not().isEmpty().withMessage('Invalid Password does not Empty')
    .isLength({min:5}).withMessage('The minimum password length is 5 characters')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/).withMessage('The Password Invalid')
    .exists({checkFalsy: true}).withMessage('You must type a password'),
    body('conf_pass').trim().not().isEmpty().withMessage('Invalid Password does not Empty')
    .isLength({min:5}).withMessage('The minimum password length is 5 characters')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/).withMessage('The Password must have lowwerletter,upperletter,number')
    .exists({checkFalsy: true}).withMessage('You must type a password')
    .custom((value, {req}) => value === req.body.pass).withMessage("The passwords do not match"),
  ]
}
const validationConfirmEmail = () => {
  return [
    body('otp').trim().not().isEmpty().withMessage('Invalid OTP does not Empty')
    .exists({checkFalsy: true}).withMessage('You must type a number')
    .isLength({min:8,max:8}).withMessage('The OTP length is 8 number')
  ]
}
module.exports = {
    checkMemberToken,
    validationLogin,
    validationRegis,
    validationConfirmEmail,
};