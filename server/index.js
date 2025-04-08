import express from 'express';
import cors from "cors";
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoute.js';

const app = express();
const port = process.env.PORT || 4000;

// Connect to database
connectDB();

// CORS configuration
const corsOptions = {
  origin: "https://authentication-rakesh-app.vercel.app", // ✅ your frontend URL
  credentials: true, // ✅ allow cookies, sessions, etc.
};

app.use(cors(corsOptions)); // ✅ apply CORS before routes
app.use(express.json());
app.use(cookieParser());

// API endpoints
app.get('/', (req, res) => res.send("API Working"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// Start server
app.listen(port, () => console.log(`Server started on PORT: ${port}`));

export default app;
