import express from 'express';
import * as UserController from '../controllers/userController';

const router = express.Router();

router.post('/signup', UserController.createUser);
router.get('/:userId', UserController.getUser);
router.put('/:userId', UserController.updateUser);
router.delete('/:userId', UserController.deleteUser);

// App Routes
router.get('/app/status', AppController.getStatus);  // For checking app status (Redis and DB)
router.get('/app/stats', AppController.getStats);


export default router;