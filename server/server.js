


const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const MongoStore =require('connect-mongodb-session')
const expressSession=require('express-session');
const dotenv = require('dotenv');
const Comment=require('../server/Models/Comment/Comment');
const AuthController=require('./Controller/Auth/AuthController.js')
dotenv.config();
const questionController=require('./Controller/QuestionController/Questioncontroller');


const app=express();



// //=====================================Middleware==============================//
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))


const mongostore=MongoStore(expressSession);
const mongoURI=process.env.mongoURI;
const store=new mongostore({
    collection:'userSession',
    uri:mongoURI,
    expires:10*10*60*24*1000,
})


app.use(expressSession({
    name:'_sid',
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:false,
    store:store,
    cookie:{
        httpOnly:true,
        secure:process.env.NODE_ENV=='production',
        maxAge:10*10*60*24*1000,
        sameSite:false
    },
}))

// //============================MongoDB Connection===================================//
mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
},(error)=>{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log('Connection successful');
    }
})
//===============================Routing=========================//
const router=express.Router();
const authController=new AuthController();
router.post('/api/SignUp',(req,res)=>{
    authController.SignUp(req,res);
});


router.post('/api/Login',(req,res)=>{
    authController.Login(req,res);
});
router.post('/api/askquestion',(req,res)=>{
    authController.askQustion(req,res);
})

router.get('/api/allQuestion',(request, response)=>{
    authController.GetAllQuestions(request, response);
})
router.post('/api/questionID',(request, response)=>{
    authController.GetQuestionId(request, response);
})
router.post("/api/likes", (request, response) => {
    authController.Like(request, response);
  });
  router.post("/api/dislike", (request, response) => {
   authController.Dislike(request, response);
  });
  router.post("/api/comment", (request, response) => {
      authController.Comment(request,response);
    // const comment = new Comment(request.body) 

    // comment.save((err, comment ) => {
    //     if(err) return res.json({ success:false, err})

    //     Comment.find({ '_id': comment._id })
    //     .populate('writer')
    //     .exec((err, result) => {
    //         if(err) return res.json({ success:false, err })
    //         return response.status(200).json({ success:true, result })
    //     })

    // })
   });
   router.get('/api/aboutus',(req,res)=>{
       authController.GetAllAboutUs(req,res);
   })
   router.get('/api/mytasks',(req,res)=>{
    authController.GetMyAllTasks(req,res);
})
router.get('/api/educationTask',(req,res)=>{
    authController.GetEducationTasks(req,res);
})
router.get('/api/weatherTask',(req,res)=>{
    authController.GetWeatherTasks(req,res);
})
router.get('/api/trendingTask',(req,res)=>{
    authController.GetTrendingTasks(req,res);
})
router.get('/api/isuserLoggedIn',(req,res)=>{
    authController.isLoggedIn(req,res);
})






//============================Server Endpoint==============================================================//
app.use(router)

// //===========================Server Connection============================//

const PORT = process.env.PORT;
app.listen(PORT, () => {
        console.log('server start on port:',PORT);
    })