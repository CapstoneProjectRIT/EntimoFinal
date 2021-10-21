import React from 'react'
import bc from '../../assets/Back.png'

import Styled from 'styled-components'
import Nave from './Nav';

import Landingdata from './Landingdata';
 class Landing extends React.Component
{
    render() 
    {
        return <Container >
         
            <Nave></Nave>
        
            <Landingdata></Landingdata>
        </Container>
    };
            
}
const Container = Styled.div
`
disply: flex ;
height: 900px;
width: 1440px;
background-size: cover;
background-image: url(${bc});
margin: 0 auto;
    
`;

export default Landing;