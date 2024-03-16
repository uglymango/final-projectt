const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoute = require('./Routes/auth.js');
const userRoute = require('./Routes/user.js');
const doctorRoute = require('./Routes/doctor.js');
const reviewRoute = require('./Routes/review.js');
const bookingRoute = require('./Routes/booking.js');



const app = express()

const port = process.env.PORT || 8000

const corsOptions = {
    origin:true 
}

app.get('/', (req,res)=> {
    res.send('Api is working')
})

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)

        console.log('mongodb is connected')
    } catch (error) {
        console.log('mongodb connection failed')
    }
}

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/bookings', bookingRoute);



app.listen(port, ()=> {
    connectDB();
    console.log("Server is running");
})