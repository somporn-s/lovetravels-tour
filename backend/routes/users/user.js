const express = require('express');
const router = express.Router();
const userControllers = require('../../controllers/users/api/user');
const userMiddlewares = require('../../controllers/users/middleware');

router.post('/login',userMiddlewares.checkUserToken,userControllers.loginUser);
router.post('/register',userMiddlewares.checkUserToken,userControllers.registerUser);

module.exports = router;