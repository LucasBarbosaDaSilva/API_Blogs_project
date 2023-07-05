const express = require('express');

const router = express.Router();

const { controllerUser } = require('../controllers');

const { validateToken } = require('../middlewares/tokenValidation.middleware');

const { 
  validateEmail, validatePassword, validateDisplayName, validateUser,
} = require('../middlewares/userValidation.middleware');

router.get('/', validateToken, controllerUser.getAllUsers);

router.get('/:id', validateToken, controllerUser.getUserById);

router.post(
  '/', 
validateDisplayName,
 validateEmail, 
 validatePassword, 
 validateUser,
 controllerUser.postUser,
 );

router.delete('/me', validateToken, controllerUser.deleteUserById);

 module.exports = router;