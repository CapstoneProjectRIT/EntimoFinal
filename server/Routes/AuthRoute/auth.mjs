import express from 'express'
import AuthController from '../../Controller/Auth/AuthController.js'

const router=express.Router();
const authController=new AuthController();
router.post('/api/SignUp',(req,res)=>{
    authController.SignUp(req,res);
});


router.post('/api/Login',(req,res)=>{
    authController.Login(req,res);
});

export default router;