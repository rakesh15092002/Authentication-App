import express from 'express';
import cors from "cors";
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoute.js';



const app = express();


const port = process.env.PORT || 4000
connectDB();

app.use(express.json());
app.use(cookieParser());

// const corsOption = app.options('*', (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', 'https://authentication-rakesh-app.vercel.app, https://authentication-app-rakesh-mauryas-projects.vercel.app, https://authentication-app-git-main-rakesh-mauryas-projects.vercel.app'); // Update with your frontend URL
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.sendStatus(204);
// });

const corsOptions = {
  origin: ['https://authentication-rakesh-app.vercel.app'], // allow specific origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // if you need to allow cookies or auth headers
  allowedHeaders: ['Content-Type', 'Authorization'], // specify allowed headers
  exposedHeaders: ['Content-Length', 'X-Knowledge-Base'],
};

app.use(cors(corsOptions));

// api end points
app.get('/',(req,res) => res.send("API Working"));
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter)


app.listen(port,() => console.log(`Server started on PORT:${port}`))

export default app;
