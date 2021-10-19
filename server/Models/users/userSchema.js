// JavaScript source code

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
   
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    tokens: [
        {
        token: {
            type: String,
            required: true
            }
        }
    ]
    
})

//We haching the password

userSchema.pre('save', async function (next) {
    console.log("Hi this is sanket");
    if (this.isModified('password')) {
        
        this.password = bcrypt.hashSync(this.password, 12);
        
        this.confirmpassword = bcrypt.hashSync(this.confirmpassword, 12);
    }
    next();
});

// userSchema.methods.generateAuthToken = async function () {
//     try {
//         let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({ token: token });
//         await this.save();
//         return token;
//     } catch (err) {
//         console.log(err);
//     }

//}
const User = mongoose.model('USER', userSchema);

module.exports = User;