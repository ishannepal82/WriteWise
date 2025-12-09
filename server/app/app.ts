import express from 'express';
import { authRouter } from './api/routers/auth';
import dotenv from 'dotenv';
import { connectDB} from './config/db';
import { connectOpenRouter } from './config/openrouter';
import { serviceRouter } from './api/routers/services';
import cors from 'cors';

dotenv.config();
const app = express();

// Middlewares
app.use(cors({
  origin: "https://writewise.pages.dev",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

app.options("/", cors());

app.use(express.json());

// Connecting to DB 
connectDB();
connectOpenRouter();

// Routers
app.use('/auth', authRouter);
app.use('/service', serviceRouter)



app.listen(3000, () => {
  console.log('✅ Server running on port 3000');
  console.log('📍 POST /auth/register');
  console.log('📍 GET /auth/login');
});

