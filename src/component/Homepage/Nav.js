import React, { useState } from 'react';
import styled from 'styled-components';
import Post from './Post';
import logo from '../../assets/ENTIMO30.png';

export default function Nav() {
  const [Popup, setPopup] = useState(false);
  return (
    <Container>
      <Logo />
      <Searchbar>
        <PNU><PostT onClick={() => setPopup(true)}>Post Task</PostT></PNU>
      </Searchbar>
      <QAsection />
      <Post trigger={Popup} setTrigger={setPopup}>
        
      </Post>
    </Container>
  );
}
const Container = styled.nav`
position: absolute;
width: 1440px;
display: flex;
height: 120px;
left: 0px;
top: 0px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
margin: 0 auto;
`;
const Logo = styled.div`
position: absolute;
width: 115px;
height: 115px;
left: 120px;
top: 4px;
text-align: center;
background-image: url(${logo});
background-size: cover;
`;
const Searchbar = styled.div`
position: absolute;
width: 1240px;
height: 40px;
left: 300px;
top: 20px;
background-color: black;
`;
const QAsection = styled.div`
position: absolute;
width: 800px;
height: 48px;
left: 396px;
top: 72px;
background-color: black;
`;
const PNU = styled.div`
display: flex;
position: absolute;
left: 79.8%;
right: 1.62%;
top: 15%;
bottom: 15%;
background-color: red;
`;
const PostT = styled.div`

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 18.9296px;
line-height: 28px;
text-align: center;
`;
