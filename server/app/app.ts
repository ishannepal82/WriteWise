import express from 'express';
import { authRouter } from './api/routers/auth';
import dotenv from 'dotenv';
import { connectDB, DisConnectDB } from './config/db';
import cors from 'cors';
dotenv.config();
const app = express();

// Middlewares
app.use(express.json());

// Cors Middleware
// app.use(cors({
//   origin: "*"
// }));


// Connecting to DB
connectDB();

// Routers
app.use('/auth', authRouter);



app.listen(3000, () => {
  console.log('✅ Server running on port 3000');
  console.log('📍 POST /auth/register');
  console.log('📍 GET /auth/login');
});

