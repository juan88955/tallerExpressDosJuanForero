import { Router } from 'express';
import userRouter from './users.js';
import propertyRouter from './properties.js';
import registerRouter from './registers.js';
import auth from './auth.js';

const router = Router();

router.use('/users', userRouter);
router.use('/properties', propertyRouter);
router.use('/registers', registerRouter);
router.use('/auth', auth);

export default router;