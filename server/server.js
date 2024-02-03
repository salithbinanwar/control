import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './Routes/userRoutes.js';
import connectDB from './config/db.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

const port = process.env.PORT ||8000;
connectDB()


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port,()=> console.log(`server listening on ${port}`));
