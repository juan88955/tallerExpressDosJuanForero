import { Router } from 'express';
import { allUsers, getUser } from '../controllers/users/read.js';

const userRouter = Router();

userRouter.get('/all', allUsers);
userRouter.get('/id/:id', getUser);

export default userRouter;