const express = require('express');
const router = express.Router();
const userControllers = require('../../controllers/agents/api/agent');
const bookingControllers = require('../../controllers/agents/api/booking');
// const datetime = require('../../controllers/agents/datetime');
// const multer = require('multer');
//const userMiddlewares = require('../../controllers/agent/middleware');


router.post('/login',userControllers.loginAgent);
router.post('/register',userControllers.registerAgent);

router.post('/booking',bookingControllers.getAllBooking);

module.exports = router;