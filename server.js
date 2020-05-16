const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./config/db');
const errorHandler=require('./middleware/error');


// Load env variables
dotenv.config({path:'./config/config.env'});
connectDB();
const bootcamps=require('./routes/bootcamps');
const app=express();
app.use(express.json());

app.use('/api/v1/bootcamps',bootcamps);
app.use(errorHandler)

const PORT=process.env.PORT || 5000;
const server=app.listen(PORT,console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));

process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`);
    server.close(process.exit(1));
})