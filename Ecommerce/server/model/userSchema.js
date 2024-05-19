const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    contact :{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    }
})
// userSchema.methods.generateAuthToken = async function(){
//     try{
//         let token = jwt.sign(
//             {
//                 email:this.email,
//             }
//             ,process.env.SECRET_KEY,{expiresIn:'1d'});
       
//         return token;
//     }
//     catch(err){
//         console.log(err);
//     }
// }
const User = mongoose.model('USER',userSchema);
module.exports = User;