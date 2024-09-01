
const encryptToken = require('./encrypt');
const {body,check,validationResult} = require('express-validator')
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
const validationForm = (req,res,next) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }else{
      next()
    }
}
const formLogin = () => {
  return [
    body('user').trim().not().isEmpty().withMessage('Invalid username does not Empty')
    .isLength({min:5}).withMessage('The minimum username length is 5 characters')
    .isLength({max:15}).withMessage('The maximum username length is 15 characters')
    .matches(/^[a-zA-Z0-9_.-]*$/).withMessage('The Usrename allow just characters and number only.')
    .exists({checkFalsy: true}).withMessage('You must type a text'),
    body('pass').trim().not().isEmpty().withMessage('Invalid Password does not Empty')
    .isLength({min:5}).withMessage('The minimum password length is 5 characters')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/).withMessage('The Password must have lowwerletter,upperletter,number least once')
    .exists({checkFalsy: true}).withMessage('You must type a password'),
  ]
}
const formRegis = () => {
  return [
    body('license').trim().not().isEmpty().withMessage('Invalid license does not Empty')
    .exists({checkFalsy: true}).withMessage('You must type a text'),
    body('username').trim().not().isEmpty().withMessage('Invalid Email does not Empty')
    .isLength({min:5}).withMessage('The minimum username length is 5 characters')
    .isLength({max:15}).withMessage('The maximum username length is 15 characters')
    .exists({checkFalsy: true}).withMessage('You must type a text'),
    body('email').trim().not().isEmpty().withMessage('Invalid Email does not Empty')
    .isEmail().withMessage('Invalid Email Address')
    .exists({checkFalsy: true}).withMessage('You must type a email'),
    body('pass').trim().not().isEmpty().withMessage('Invalid Password does not Empty')
    .isLength({min:5}).withMessage('The minimum password length is 5 characters')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/).withMessage('The Password must have lowwerletter,upperletter,number least once')
    .exists({checkFalsy: true}).withMessage('You must type a password'),
    body('conf_pass').trim().not().isEmpty().withMessage('Invalid Password does not Empty')
    .isLength({min:5}).withMessage('The minimum password length is 5 characters')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/).withMessage('The Password must have lowwerletter,upperletter,number least once')
    .exists({checkFalsy: true}).withMessage('You must type a password')
    .custom((value, {req}) => value === req.body.pass).withMessage("The passwords do not match"),
    body('company').trim().not().isEmpty().withMessage('Invalid company does not Empty')
    .isLength({max:50}).withMessage('The maximum username length is 50 characters')
    .exists({checkFalsy: true}).withMessage('You must type a text'),
    body('phone').trim().not().isEmpty().withMessage('Invalid phone does not Empty')
    .matches(/^[0-9]{9,10}$/).withMessage('The phone is number and lenght number is between 9 - 10')
    .exists({checkFalsy: true}).withMessage('You must type a number'),
    //body('payment').custom((value, {req}) => req.files[0]).withMessage("Invalid file does not Empty"),
  ]
}
const formConfirmEmail = () => {
  return [
    body('otp').trim().not().isEmpty().withMessage('Invalid OTP does not Empty')
    .exists({checkFalsy: true}).withMessage('You must type a number')
    .isLength({min:8,max:8}).withMessage('The OTP length is 8 number')
  ]
}
module.exports = {
    checkMemberToken,
    formLogin,
    formRegis,
    formConfirmEmail,
    validationForm,
};