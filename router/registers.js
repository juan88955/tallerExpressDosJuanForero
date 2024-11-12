import { Router } from 'express';
import { allRegisters, getRegister } from '../controllers/registers/read.js';
import updateRegister from '../controllers/registers/update.js';
import deleteRegister from '../controllers/registers/delete.js';
import createRegister from '../controllers/registers/create.js';
import passport from '../middlewares/passport.js';

const registerRouter = Router();

registerRouter.get('/all', passport.authenticate('jwt', { session: false }), allRegisters);
registerRouter.get('/id/:id', passport.authenticate('jwt', { session: false }), getRegister);
registerRouter.post('/create', passport.authenticate('jwt', { session: false }), createRegister);
registerRouter.put('/update/:id', passport.authenticate('jwt', { session: false }), updateRegister);
registerRouter.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deleteRegister);


export default registerRouter;