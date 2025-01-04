import express from 'express';
import * as UserController from '../controllers/userController';

const router = express.Router();

router.post('/signup', UserController.createUser);
router.get('/:userId', UserController.getUser);
router.put('/:userId', UserController.updateUser);
router.delete('/:userId', UserController.deleteUser);

export default router;