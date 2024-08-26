const express = require('express');
const router = express.Router();
const userControllers = require('../../controllers/agents/api/agent');
const bookingControllers = require('../../controllers/agents/api/booking');
// const datetime = require('../../controllers/agents/datetime');
const multer = require('multer');
//const userMiddlewares = require('../../controllers/agent/middleware');

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

router.post('/login',userControllers.loginAgent);
router.post('/register',upload.array('payment',1),userControllers.registerAgent);
router.post('/confirm_email',userControllers.confEmailAgent);

router.post('/booking',bookingControllers.getAllBooking);
router.get('/upload',bookingControllers.uploadPic);

module.exports = router;