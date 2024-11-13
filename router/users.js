// router/users.js
import { Router } from 'express';
import { allUser, userById } from "../controllers/users/read.js";
import { register } from '../controllers/users/register.js';
import update from "../controllers/users/update.js";
import deleteOne from "../controllers/users/delete.js";
import validator from "../middlewares/validator.js"
import schemaUsersCreated from "../schemas/users/create.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import passport from "../middlewares/passport.js";

const userRouter = Router();

userRouter.post('/register', validator(schemaUsersCreated), accountExists, createHash, register)
userRouter.get('/all', passport.authenticate('jwt', { session: false }), allUser)
userRouter.get('/id/:id', passport.authenticate('jwt', { session: false }), userById)
userRouter.put('/update', passport.authenticate('jwt', { session: false }), update)
userRouter.delete('/deleteOne', passport.authenticate('jwt', { session: false }), deleteOne)

export default userRouter;