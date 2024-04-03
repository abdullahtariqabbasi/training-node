// routes/v1/UserRoutes.js
import { Router } from 'express';
import UserController from '../../controllers/UserController.js';
import UserValidator from '../../utils/validators.js';
import { body } from 'express-validator';

const router = Router();
const userController = new UserController();

router.get('/', (req, res) => userController.getAllUsers(req, res));
router.post('/', UserValidator.userValidationRules(body), (req, res) => userController.addUser(req, res));
router.delete('/:id', (req, res) => userController.deleteUser(req, res));
router.put('/:id', UserValidator.userValidationRules(body), (req, res) => userController.updateUser(req, res));
router.get('/:id', (req, res) => userController.getUserById(req, res));

export default router;
