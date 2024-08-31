const express = require('express');
const router = express.Router();
const userControllers = require('../../controllers/agents/api/agent');
const bookingControllers = require('../../controllers/agents/api/booking');
const multer = require('multer');
const userMiddlewares = require('../../controllers/agents/middleware');

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'src/images/qrcode/')
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  }
})
const fileFillter = {fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            const err = new Error('Only .png, .jpg and .jpeg format allowed!')
            err.name = 'ExtensionError'
            return cb(err);
        }
    },}
const upload = multer({ storage,fileFillter })

router.post('/login',userMiddlewares.formLogin(),userMiddlewares.validationForm,userControllers.loginAgent);
router.post('/register',upload.array('payment',1),userMiddlewares.formRegis(),userMiddlewares.validationForm,userControllers.registerAgent);
router.post('/confirm_email',userMiddlewares.formConfirmEmail(),userMiddlewares.validationForm,userControllers.confEmailAgent);
router.get('/resend_otp',userControllers.resendOTPAgent);

router.post('/booking',bookingControllers.getAllBooking);
router.get('/upload',bookingControllers.uploadPic);

module.exports = router;