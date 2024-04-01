// routes/v1/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const { userValidationRules } = require('../../utils/validators');

router.get('/', userController.getAllUsers);
router.post('/', userValidationRules(), userController.addUser);
router.delete('/:id', userController.deleteUser);
router.put('/:id', userValidationRules(), userController.updateUser);
router.get('/:id', userController.getUserById);

module.exports = router;
