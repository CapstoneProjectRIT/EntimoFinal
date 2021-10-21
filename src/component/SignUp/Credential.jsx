import React,{useState} from 'react';

import styled from 'styled-components';
import img from '../../assets/google.png';
import img2 from '../../assets/Vector.png';
import {NavLink,useHistory} from "react-router-dom";
import axios from 'axios';



function Credential() {

const usehistory=useHistory();   
   
const [fullname,setFullname]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [confirmpassword,setConfirmpassword]=useState('');

const SignUserUp=async(e)=>{
    e.preventDefault();
    const form_data=new FormData();
    form_data.append('fullname',fullname);
    form_data.append('email',email);
    form_data.append('password',password);
    form_data.append('confirmpassword',confirmpassword);

    const url='http://localhost:5000/api/SignUp'
    try {
        const response=await axios.post(url,form_data,{
            withCredentials:true,
        });
        const {status}=response;
        if(status===201)
        {
            window.alert("Register successfull");
            usehistory.push('/Login');
        }
    } catch (error) {
        window.alert("Invalid Credentials: Please Insert All Fields");
    }
}



        return (
            <>
            <form method="POST">
            <Signup>SignUp</Signup>
            
            <Container>
                <Fullname>Full Name</Fullname>
                <Fullnamecontainer 
                 value={fullname}
                 onChange={e=>setFullname(e.target.value)}
                placeholder="Full Name" style={{border: 'none'}} name="fullname" id="fullname" required >
                    
                </Fullnamecontainer>

                
               
                    <Emailtext>Email</Emailtext>
                    
                
                    <EmailAddress 
                     value={email}
                     onChange={e=>setEmail(e.target.value)}
                    placeholder="Email" style={{border: 'none'}} name="email" id="email" required >

                    </EmailAddress>
                    
                

                <Password>Create Password</Password>
                
                
                    <PasswordText type="password" 
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    placeholder="Password" style={{border: 'none'}} name="password" id="password" required >

                    </PasswordText>

                    <ConfirmPassword>Confirm Password</ConfirmPassword>
                    <ConfirmPasswordText type="password" 
                    value={confirmpassword}
                    onChange={e=>setConfirmpassword(e.target.value)}
                    placeholder="Confirm Password" style={{border: 'none'}} name="confirmpassword" id="confirmpassword" required ></ConfirmPasswordText>
              

                
                

            </Container>
            <SignupButton onClick={SignUserUp}>
                <Signuptext>Sign up</Signuptext>
            </SignupButton>
            
            <Signupwith>or Signup with</Signupwith>
            <Alreadyacount>Already have an account yet? <Login to="/Login">Login</Login></Alreadyacount>
            <Googleloginbutton style={{border: 'none'}} >
                <Group6>
                    <Googleicon></Googleicon>
                    <GoogleText>Google</GoogleText>
                </Group6>
            </Googleloginbutton>

            <Facebookloginbutton style={{border: 'none'}}>
                <Group5>
                    <Facebookicon></Facebookicon>
                    <FacebookText>Facebook</FacebookText>
                </Group5>
            </Facebookloginbutton>
            
            
           
           
            </form>
            
            </>
            
        );
            
           
            
            
            
            
            
        
    
}
export default Credential

const Signup= styled.h1
`
/* SignUp */


position: absolute;
width: 173px;
height: 72px;
left: 825px;
top: 8px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 72px;
/* identical to box height */


color: #000000;   

`
const Container=styled.div
`
position: absolute;
width: 427px;
height: 390px;
left: 825px;
top: 70px;

`
const Fullname=styled.h2
`
/* Full Name */


position: absolute;
left: 2.36%;
right: 35.62%;
top: 6.33%;
bottom: 70.33%;

font-family: Poppins;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #000000;
`
const Fullnamecontainer=styled.input
`
/* Rectangle 3 */


position: absolute;
left: 2.36%;
right: 35.62%;
top: 20.56%;
bottom: 65.33%;
width:421px;
height:46px;

background: #F7F6F9;


font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: rgba(0, 0, 0, 0.5);

`



const Emailtext=styled.h2
`
position: absolute;
left: 2.36%;
right: 35.62%;
top: 32.33%;
bottom: 60.33%;
height:46px;

font-family: Poppins;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #000000;


`


const EmailAddress=styled.input
`
position: absolute;
left: 2.36%;
right: 35.62%;
top: 46.27%;
width:421px;
height:46px;

background: #F7F6F9;


font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */



`

const Password=styled.h1
`
/* Password */


position: absolute;
left: 2.36%;
right: 35.62%;
top: 58.55%;


font-family: Poppins;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #000000;
`


const PasswordText=styled.input
`
/* ********* */


position: absolute;
left: 2.36%;
right: 35.62%;
top: 71.82%;
width:421px;
height:46px;

background: #F7F6F9;


font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */



`
const ConfirmPassword=styled.h1
`
/* Password */


position: absolute;
left: 2.36%;
right: 35.62%;
top: 82.55%;


font-family: Poppins;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #000000;
`


const ConfirmPasswordText=styled.input
`
/* ********* */


position: absolute;
left: 2.36%;
right: 35.62%;
top: 95.82%;
width:421px;
height:46px;

background: #F7F6F9;


font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */



`

const SignupButton=styled.button
`
/* Rectangle 4 */


position: absolute;
left: 54.4%;

top: 70.84%;
width:427px;
height:42px;



font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;


/* Button background */

background: #000000;
`

const Signuptext=styled.text
`
/* Login */


position: absolute;
left: 41.36%;

top: 5.56%;


font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #FFFFFF;
`

const Signupwith=styled.h2
`
/* Or SignUp with */


position: absolute;
left: 63.78%;

top: 75.44%;


font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #000000;

`
const Googleloginbutton=styled.button
`
/* Google */


position: absolute;
width: 196px;
height: 50px;
left: 55.1%;
top: 84.44%;
background: rgba(255, 204, 207, 0.54);
`
const Group6=styled.div
`
/* Group 6 */


position: absolute;
left: 15.03%;
right: 14.73%;
top: 22%;
bottom: 22.24%;
`
const GoogleText=styled.h3
`
/* Google */


position: absolute;
left: 45.45%;
right: 14.73%;
top: 0%;
bottom: 0%;


font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 0px;

color: #000000;

`
const Googleicon=styled.div
`
/* flat-color-icons:google */


position: absolute;
left: 0%;
right: 68.51%;
top: 0%;
bottom: 0%;
background: url(${img});
`
const Facebookloginbutton=styled.button
`
/* Facebook */


position: absolute;
width: 196px;
height: 50px;
left: 1056px;
top: 84.44%;
background: rgba(25, 118, 210, 0.4);
`
const Group5=styled.div
`
/* Group 5 */


position: absolute;
left: 13.47%;
right: 10.36%;
top: 22%;
bottom: 22.24%;
`
const Facebookicon=styled.div
`
position: absolute;
left: 0%;
right: 77.51%;
top: 0%;
bottom: 0%;
background: url(${img2});   
`
const FacebookText=styled.h2
`
/* Facebook */


position: absolute;
left: 37.82%;
right: 10.36%;
top: 0%;
bottom: 0%;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 0px;

color: #000000;
`
const Alreadyacount=styled.h3
`
/* Already have an account yet? Login */


position: absolute;
left: 56.72%;

top: 90.33%;


font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #000000;
`
const Login=styled(NavLink)
`
position: absolute;
left: 103.72%;

top: 0%;


font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */

`