const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

var cors = require('cors')
app.use(cors())
app.use(express.json());



//const uri = 'mongodb://localhost:27017/customers';
//# ATLAS_URI=mongodb://localhost:27017/customers
mongoose.connect('mongodb+srv://merncourse:password123Tech@cluster0.zedcl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const connection =  mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established sucessfully!!!!')
});

const customerRouter = require('./routes/customers');
app.use('/customers', customerRouter);

// app.get('/', (req, res) => {
//     res.send('Crud application');
// })
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))
    app.get('*', (req, resp)=>{
        resp.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
})



//app.use(express.json());
//const exercisesRouter = require('./routes/exercises');
//app.use('/exercises', exercisesRouter);


