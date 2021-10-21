import React from 'react'
import styled from 'styled-components';

 class data extends React.Component {
    render() {
        return (
          <>
            <Text1>
            Getting 
            Started!
      </Text1>
      <Text2>Create an account</Text2>
      </>
        );
    }
}
export default data

const Text1 = styled.h1
  `
   
  padding: 0px;
  margin-left: 120px;
  position: absolute;
  width: 532px;
  height: 252px;
  top: 162px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 74.2px;
  line-height: 102px;
  text-transform:uppercase;
  color: #000000;
  `;
const Text2=styled.h2
`
position: absolute;
width: 879px;

left: 120px;
top: 22rem;


font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 35.2px;
line-height: 105px;
text-transform: uppercase;

color:#696969;
`