const express = require('express');
const app= express();
const seedDB = require('./seed');
const quoteRoute = require('./apis/quoteRoute');
const cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())
app.use(quoteRoute);


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/quote-db')
.then(()=>{console.log('Database connected');})
.catch((err)=>{console.log(err)});
// seedDB();

app.get('/',(req,res)=>{
    res.send('Welcome to backend');
})

app.get('/hello',(req,res)=>{
    res.status(200).json({msg: 'Hello from backend'});
})





const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}....`);
})