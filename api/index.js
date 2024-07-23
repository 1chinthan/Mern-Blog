import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('MongoDB connected');
})
.catch((error) => {
    console.error('MongoDB not connected', error);
});

const app = express();

app.use(express.json());
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "internal server error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})


