const formidable=require("formidable");
const questionModule=require('../../Models/Questions/Question');

class Questioncontroller{
    askQustion(req,res)
    {
        const form=new formidable.IncomingForm();
        try {
            form.parse(req,async (error,fields,files)=>{
                if(error)
                {
                    return res.status(500).json({msg:"Network Error: Don't ask your Question"});
                }
                const {question}=fields
                if(!question)
                {
                    return res.status(500).json({msg:"A question has to be asked"});
                }
                const userSession=req.session.user ||false;
                if(!userSession)
                {
                    const owner=userSession.email
                    const newquestion=new questionModule({
                        owner:owner,
                        question:question
                    })
                    const SavedQuestion=await newquestion.save();
                    return res.status(500).json({msg:"Qustion Asked"});

                }
            })
        } catch (error) {
            return res.status(500).json({msg:"Network Error: Faild to register try again later"});
        }
    }
}
module.exports=Questioncontroller;