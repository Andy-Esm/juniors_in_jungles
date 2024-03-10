import express, {Response, Request} from 'express';
import {config as dotenvConfig} from 'dotenv';
import mongoose from 'mongoose';
import http from 'http';
import userRouter from './routes/user.route';

dotenvConfig();

const app = express();
const server = new http.Server(app);

mongoose.set('strictQuery', false);

app.use('/api/users', userRouter);

async function start(PORT: string, UrlBD: string) {
	try {
		await mongoose.connect(UrlBD);
		server.listen(PORT);
		console.log(
			`Сервер запущен: внешний порт ${PORT}, подключен к БД через порт ${UrlBD}`
		);
	} catch (err) {
		console.log(err);
	}
}
const UrlBD = process.env.UrlBD || 'mongodb://127.0.0.1:27017/juniors-db';
const PORT = process.env.PORT || '3000';
start(PORT, UrlBD);
