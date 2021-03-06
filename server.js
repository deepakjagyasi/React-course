const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 6000;
const path = require('path');

var cors = require('cors')
app.use(cors())
app.use(express.json());

//const uri = 'mongodb://localhost:27017/customers';
//mongoose.connect('mongodb+srv://merncourse:password123Tech@cluster0.zedcl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const connection =  mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established sucessfully!!!!')
});

const customerRouter = require('./routes/customers');
const customerModel = require('./models/customer.model');
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

//const exercisesRouter = require('./routes/exercises');
//app.use('/exercises', exercisesRouter);
const getDocuments = async () => {
    try{
        const result = await customerModel
        //.find({ })
        //.find({ $and : [ {gender: 'male'}, {"first_name" : "DEEP"} ] })
        //.find({gender: {$nin : ["Male", "tst"]}})
        //.select({first_name: 1})
        //.limit(1)
        //.sort({first_name : 1})
        //.countDocuments(); 
        //.aggregate([ {$group: {_id: "$gender", Total: {$sum: 1} } } ])
        .aggregate([ {$group: {_id: "$gender", MaxAge: {$max: "$age"} } } ])
        //.aggregate([ {$group: {_id: "$gender", MinAge: {$min: "$age"} } } ])
        console.log(result);
    } catch(err) {
        console.log(err);
    }
}
getDocuments();


