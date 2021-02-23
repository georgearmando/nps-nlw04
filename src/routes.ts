import { Router } from 'express';
import UserController from './controllers/UserController';

const userRouter = Router();
const userController = new UserController();

// Rota para a criação de user
userRouter.post('/users', userController.create)

export default userRouter;