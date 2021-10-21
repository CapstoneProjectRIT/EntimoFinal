import React from 'react';

import logo from '../../assets/ENTIMO30.png';
import styled from 'styled-components';
import {BrowserRouter as Router,NavLink,} from "react-router-dom";

const Nave = () => {
    return (
     <>
       
           <Logo></Logo> 
         <NavLink to="/Login"  ><Login>Log In</Login></NavLink>
         <NavLink to="/SignUp"  ><Signup>Join Now</Signup></NavLink>

            
      </>  
        
    )
}

export default Nave
 



const Logo= styled.div
`
position: absolute;
width: 146.01px;
height: 145px;
left: 120px;
top: 8px;
text-align: center;
background-image: url(${logo});
background-size: cover;
`;

const Login= styled.div
`
position: absolute;
width: 82px;
height: 38px;
left: 900px;
top: 61px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 37px;
/* identical to box height */
text-align: center;
color: #000000;
`
const Signup= styled.div
`
position: absolute;
width: 128px;
height: 38px;
left: 1107px;
top: 61px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 37px;
/* identical to box height */
text-align: center;
color: #000000;
`