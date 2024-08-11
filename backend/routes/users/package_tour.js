const express = require('express');
const router = express.Router();
const packageTourControllers = require('../../controllers/users/api/package_tour');
const userMiddlewares = require('../../controllers/users/middleware');

router.get('/find_package',packageTourControllers.getFindPackage);
router.post('/find_package',packageTourControllers.postFindPackage);

module.exports = router;