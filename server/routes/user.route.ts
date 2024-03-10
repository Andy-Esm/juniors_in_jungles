import express from 'express';
import {getTest} from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get('/test', getTest);

export default userRouter;
