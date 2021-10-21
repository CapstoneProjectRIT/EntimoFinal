import React from 'react';

import styled from 'styled-components';

import img from '../../assets/Rectangle.png'
import logo from '../../assets/logo.png'
import Credential from './Credential';
import Data from './data';

class Button extends React.Component{
 
  
    render()
    {
        return <Backround>
          

          <Logo></Logo>
          <Credential/>
          <Data/>
         
          
        </Backround>
          
          
             
          
    }
   
    
}
export default Button

  const Backround=styled.div
  `
  position:absulute;
  width: 720px;
  height: 100vh;
  left: 0px;
  top: 0px;
  
  background: url(${img});
  `

  const Logo=styled.div
  `
  position: absolute;
width: 146.01px;
height: 145px;
left: 120px;
top: 8px;

background: url(${logo});
  `
  
 


    
  