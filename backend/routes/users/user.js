const express = require('express');
const router = express.Router();
const userControllers = require('../../controllers/users/api/user');
const packageControllers = require('../../controllers/users/api/package');
const bookingControllers = require('../../controllers/users/api/booking');
const Middlewares = require('../../controllers/users/middleware');

router.post('/login',userControllers.loginUser)
router.post('/register',userControllers.registerUser)
router.post('/confirm_email',userControllers.confEmailUser);
router.get('/resend_otp',userControllers.resendOTPUser);

router.get('/auth_token',userControllers.authToken)

router.get('/search',packageControllers.getFindPackage)
router.post('/search',packageControllers.postFindPackage)
router.post('/booking',Middlewares.checkMemberToken,bookingControllers.allBooking)

module.exports = router;