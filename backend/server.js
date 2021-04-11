const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

var cors = require('cors')
app.use(cors())
app.use(express.json());

app.use(express.static('../frontend/build'))

//const uri = 'mongodb://localhost:27017/customers';
//# ATLAS_URI=mongodb://localhost:27017/customers
mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const connection =  mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established sucessfully!!!!')
});

const customerRouter = require('./routes/customers');
app.use('/customers', customerRouter);

app.get('/', (req, res) => {
    res.send('Crud application');
})

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
})



//app.use(express.json());
//const exercisesRouter = require('./routes/exercises');
//app.use('/exercises', exercisesRouter);


