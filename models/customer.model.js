const mongoose = require('mongoose');
const validator = require('validator')

const customerSchema = new mongoose.Schema({ 
    id : {
        type: Number,
        required: true,
        unique: true,
        validate(value){
            if(value<0){
                throw new Error('Id cannot be negative---')
            }
        }
        // validate:{
        //     validator: function(value){
        //         return value.length < 0
        //     }
        // }
        //min: [6, 'Too few eggs']
    },
    first_name : {
        type: String,
        required: [true, 'FIRSTNAME IS A MANDATORY FIELD----'],
        unique: true,
        //uppercase: true,
        trim: true,
        minlength: [3, "Minimum 3 letters----"],
        maxlength: 30
    },
    last_name : {type: String},
    gender : {
        type: String,
        // lowercase: true,
        enum: {
            values: ['male', 'female'],
            message: '{VALUE} is not supported'
          }
    },
    email : {
        type: String,
        required : true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid---")
            }
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
},{
    versionKey: false
})

module.exports = mongoose.model('customers', customerSchema);