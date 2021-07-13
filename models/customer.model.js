const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    first_name : {type: String},
    last_name : {type: String},
    gender : {type: String}
},{
    versionKey: false
})

module.exports = mongoose.model('customers', customerSchema);