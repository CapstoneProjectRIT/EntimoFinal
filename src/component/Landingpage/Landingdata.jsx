import styled from 'styled-components'
import React from 'react'
import Il from '../../assets/illustration.png'

const Landingdata = () => {
    return (
        <>
         <Tagline>Post Tasks
        Get Updates</Tagline>

        <About>The real time platform designed to help people, to help each other: To ask, to update, to learn, to grow.</About>
       <Illustration></Illustration>
       </>
    )
}

export default Landingdata

const Tagline= styled.h1
`
padding: 0px;
margin-left: 120px;
position: absolute;
width: 532px;
height: 252px;
top: 198px;
font-family: Poppins;
font-style: normal;
font-weight: 700;
font-size: 84.2px;
line-height: 126px;
color: #000000;
`;

const About=styled.p
`
padding: 0px;
margin-left: 120px;
position: absolute;
width: 624px;
height: 123px;
top: 505px;
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 27.2px;
line-height: 41px;
color: #000000;
`
const Illustration=styled.div
`position: absolute;
width: 621px;
height: 432px;
top: 324px;
margin-left: 744px;
background-image: url(${Il});`