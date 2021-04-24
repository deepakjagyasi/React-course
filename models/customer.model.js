const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    first_name : {type: String, required: true},
    last_name : {type: String, required: true},
    gender : {type: String, required: true}
},{
    versionKey: false
})

module.exports = mongoose.model('Customer', customerSchema);