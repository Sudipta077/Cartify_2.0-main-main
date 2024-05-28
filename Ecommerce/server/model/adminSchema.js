const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        
    },
    name :{
        type:String,
        required:true
    },
    address :{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    payment:{
        type:String,
        required:true
    }
    
});

const Admin = mongoose.model('ADMIN',adminSchema);
module.exports = Admin;