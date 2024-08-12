const express = require('express');
const router = express.Router();
const userControllers = require('../../controllers/users/api/user');
const packageControllers = require('../../controllers/users/api/package');
const bookingControllers = require('../../controllers/users/api/booking');
const Middlewares = require('../../controllers/users/middleware');

router.post('/login',Middlewares.checkMemberToken,userControllers.loginUser);
router.post('/register',userControllers.registerUser)

router.get('/search',packageControllers.getFindPackage)
router.post('/search',packageControllers.postFindPackage)
router.post('/booking',Middlewares.checkMemberToken,bookingControllers.allBooking);

module.exports = router;