const express = require('express');
const router = express.Router();
const userControllers = require('../../controllers/agents/api/agent');
//const userMiddlewares = require('../../controllers/agent/middleware');

router.post('/login',userControllers.loginAgent);
router.post('/register',userControllers.registerAgent);

module.exports = router;