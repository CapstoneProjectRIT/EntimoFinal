const mongoose = require('mongoose');

const userSessionSchema=mongoose.Schema({
    expires:{
        type:Date,
        required:true
    },
    session:{
        type:Object,
        require:true
    }
})

const userSession=mongoose.model('userSession',userSessionSchema);
module.exports=userSession;