import { Router } from 'express';
import userRouter from './users.js';
import propertyRouter from './properties.js';
import registerRouter from './registers.js';

const router = Router();

router.use('/users', userRouter);
router.use('/properties', propertyRouter);
router.use('/registers', registerRouter);

export default router;