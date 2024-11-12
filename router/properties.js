import { Router } from 'express';
import { allProperties, getProperty } from '../controllers/properties/read.js';
import updateProperty from '../controllers/properties/update.js';
import deleteProperty from '../controllers/properties/delete.js';
import createProperty from '../controllers/properties/create.js';
import passport from '../middlewares/passport.js';

const propertyRouter = Router();

// Todas las rutas protegidas con autenticación JWT
propertyRouter.get('/all', passport.authenticate('jwt', { session: false }), allProperties);
propertyRouter.post('/create', passport.authenticate('jwt', { session: false }), createProperty);
propertyRouter.get('/id/:id', passport.authenticate('jwt', { session: false }), getProperty);
propertyRouter.put('/update', passport.authenticate('jwt', { session: false }), updateProperty);
propertyRouter.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deleteProperty);


export default propertyRouter;