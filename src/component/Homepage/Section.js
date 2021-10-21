import React from 'react';
import styled from 'styled-components';
import AllL from '../../assets/All.png';

export default function section() {
  return (
    <div>
      <Section>
        <Topic>
          <Ttext>Topics</Ttext>
          <Line />
          <InSections>
            <MenuItem>
              <Itemlogo />
              All
            </MenuItem>
            <MenuItem>
              <Itemlogo />
              All
            </MenuItem>
            <MenuItem>
              <Itemlogo />
              All
            </MenuItem>
            <MenuItem>
              <Itemlogo />
              All
            </MenuItem>

          </InSections>
        </Topic>
      </Section>
    </div>
  );
}
const Section = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 41px 15px;

position: absolute;
width: 192px;
height: 464px;
left: 40px;
top: 136px;

/* Background */

background: #FAF8F9;
`;
const Topic = styled.div`
position: absolute;
left: 6.76%;
right: 6.76%;
top: 7.99%;
bottom: 84.36%;
background-color:white;
`;
const Ttext = styled.div`
position: absolute;
    left: 2.78%;
    right: 94.16%;
    top: 40.25%;
    /* bottom: 81.5%; */
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 17.4437px;
    line-height: 10px;
    display: flex;

    align-items: center;
/* identical to box height */

display: flex;
align-items: center;
`;
const Line = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 19.54%;
    bottom: 0;
    border: 2.92517px solid #000000;
`;
const InSections = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 162px;
height: 382px;
left: 15px;
top: 41px;


/* Inside Auto Layout */
background: white;
flex: none;
order: 0;
flex-grow: 0;
margin: 40px 15px;
`;
const MenuItem = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 0px;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 14.5085px;
line-height: 20px;
color: Black;

position: static;
width: 162px;
height: 30px;`;
const Itemlogo = styled.div`
position: static;
width: 17.37px;
height: 17.37px;
left: 0px;
top: 5px;
background-image: url(${AllL});


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 11px;
`;
