const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema({
    owner: {
        type: String
        
    }, 
  question:{
      type:String
  },
  
   comment: {
        type: String
        
    },
  

}, { timestamps: true })


const Comment = mongoose.model('Comment', commentSchema);

module.exports =  Comment 