const express = require('express');
const router = express.Router();
const userControllers = require('../../controllers/agents/api/agent');
const bookingControllers = require('../../controllers/agents/api/booking');
// const datetime = require('../../controllers/agents/datetime');
const multer = require('multer');
//const userMiddlewares = require('../../controllers/agent/middleware');

const upload = multer({ dest: '../../src/images/qrcode' })

router.post('/login',userControllers.loginAgent);
router.post('/register',userControllers.registerAgent);

router.post('/booking',bookingControllers.getAllBooking);
router.post('/upload',upload.single('images'),bookingControllers.uploadPic);

module.exports = router;