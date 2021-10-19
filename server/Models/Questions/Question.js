const mongoose=require('mongoose');

const questionSchema=mongoose.Schema({
    owner:{
        type:String,
        required:true
    },
    question:{
        type:String,
        unique:true,
        required:true
    },
    upvotes:{
        type:Number,
        default:0
    },
    downvotes:{
        type:Number,
        default:0
    },
    comments:{
        type:Array,
        default:[]
    }

});


const questionModel=mongoose.model('questionsModel',questionSchema);

module.exports= questionModel;