const express = require('express');
const router = express.Router();
const userControllers = require('../../controllers/agents/api/agent');
const bookingControllers = require('../../controllers/agents/api/booking');
// const datetime = require('../../controllers/agents/datetime');
const multer = require('multer');
//const userMiddlewares = require('../../controllers/agent/middleware');

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    console.log(file)
    callback(null, 'src/images/qrcode/')
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  }
})
const upload = multer({ storage })

router.post('/login',userControllers.loginAgent);
router.post('/register',upload.array('payment'),userControllers.registerAgent);

router.post('/booking',bookingControllers.getAllBooking);
router.post('/upload',upload.array('payment'),bookingControllers.uploadPic);

module.exports = router;