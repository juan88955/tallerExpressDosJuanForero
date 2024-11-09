import { Router } from 'express';
import { allRegisters, getRegister } from '../controllers/registers/read.js';

const registerRouter = Router();

registerRouter.get('/all', allRegisters);
registerRouter.get('/id/:id', getRegister);

export default registerRouter;