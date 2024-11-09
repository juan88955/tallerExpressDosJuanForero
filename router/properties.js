import { Router } from 'express';
import { allProperties, getProperty } from '../controllers/properties/read.js';

const propertyRouter = Router();

propertyRouter.get('/all', allProperties);
propertyRouter.get('/id/:id', getProperty);

export default propertyRouter;