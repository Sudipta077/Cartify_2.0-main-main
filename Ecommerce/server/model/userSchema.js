const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    contact :{
        type:Number,
      
    },
    email:{
        type:String,
     
    },
    password :{
        type:String,
     
    },
    orders:
        [
            {
                order:{
                    type: mongoose.Schema.Types.Mixed
                 
                }
            }
        ]

        
    
})



const User = mongoose.model('USER',userSchema);

module.exports = User;