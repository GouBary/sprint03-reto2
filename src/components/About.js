import React from 'react'
import styled from 'styled-components';


export default function About()  {
  const M1 = styled.div`

 height: 50vw;
 display: flex;
 
 `;
const M1A = styled.div`

 
`;
const M1Aimg = styled.img`
margin-left: 10vw;
margin-top: 5vw;
`;
const M1Ah1 = styled.h1`
margin-left: 17vw;
font-family: 'Noto Serif JP';
font-style: normal;
font-weight: 600;
font-size: 95px;
line-height: 110%;
color: #2C2A2B;
`;
const M1Aimg2 = styled.img`
margin-left: 17vw;
margin-top: 5vw;
`;
const M1B = styled.div`
margin-top: 2vw;
margin-left: 0vw;
`;
const M1Bh1 = styled.h1`
font-family: 'Noto Serif JP';
font-style: normal;
font-weight: 500;
font-size: 34px;
line-height: 49px;
color: #2C2A2B;
`;

const M1Bp = styled.p`
font-family: 'Gilroy-Medium';
font-size: 14px;
line-height: 150%;
color: #3D3D3F;
`;
const Img2 = styled.img`
margin-top: 26vw;
width: 180px;
height: 70px;
`;
const Img3 = styled.img`
margin-top: 18vw;
margin-left: 16vw;
`;

 
  return (
    <M1>
    <M1A>
      <M1Aimg src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1655233813/reto1-sprint03/gold_ring_omwnik.jpg'width="600px"/>
      <img src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1655260939/reto1-sprint03/circule1_khl2vp.jpg'/>
      <M1Ah1>Jewelery tells</M1Ah1>
      <M1Ah1>a great story</M1Ah1>
      <M1Aimg2 src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1655237280/reto1-sprint03/text_M1_s7dmq7.jpg'/>
    </M1A>
    <M1B>
      <M1Bh1>Our story</M1Bh1>
      <M1Bp>modern jewelry is made of gold, silver, or platinum,</M1Bp>
      <M1Bp>often with precious or semiprecious stones, it evolved</M1Bp>
      <M1Bp> from shells, animal teeth, and other items used as</M1Bp>
      <M1Bp>body decoration in prehistoric times.</M1Bp>
      <img src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1655231032/reto1-sprint03/rentagle_4_pqpude.jpg'width="350px"/>
    </M1B>
    <Img2 src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1655260948/reto1-sprint03/circule2_xgv0i5.jpg'/>
    <>
     <Img3 src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1655321725/1111_ihd5zx.jpg'width="70px" height="550px"/>
      </>
  </M1>
  
  
  );
}
