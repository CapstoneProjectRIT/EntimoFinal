const mongoose=require('mongoose');

const questionSchema=mongoose.Schema({
    owner:{
        type:String,
        required:true
    },
//   sessionID:{
//       type:String,
//       required:true,
//       ref:'users'
//   },
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
        default:0
    },
    Location:{
        type:String,
        required:true
    },
    Topic:{
        type:String,
        required:true
    }

});


const questionModel=mongoose.model('questionsModel',questionSchema);

module.exports= questionModel;