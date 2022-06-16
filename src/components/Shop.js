import React from 'react'
import styled from 'styled-components';


export default function Shop()  {
  const M1 = styled.div`

 height: 36vw;
 display: flex;
 
 `;
const M1A = styled.div`

 
`;
const M1Aimg = styled.img`
margin-left: 13vw;
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
margin-left: 10vw;
`;
const M1Bh1 = styled.h1`

font-family: 'Noto Serif JP';
font-style: normal;
font-weight: 700;
font-size: 55px;
line-height: 69px;
letter-spacing: 0.05em;
color: #2C2A2B;
`;

const M1Bp = styled.p`

font-family: 'Gilroy-Medium';
font-size: 17px;
line-height: 150%;
color: #3D3D3F;
`;
const M1h11 = styled.h1`
margin-top: 2vw;
font-family: 'Gilroy-Medium';
font-size: 30px;
line-height: 30px;
letter-spacing: 0.06em;
color: #3D3D3F;
`;
const M1h12 = styled.div`
display: flex;
`;
const L = styled.div`
margin: 20px;
font-family: 'Gilroy-Medium';
font-size: 26px;
line-height: 30px;


&:hover {
    color: orange;
    font-size: 2rem;
}
`;
const M1h13 = styled.div`
display: flex;
`;
const M1h13button = styled.button`
background-color: RGB(61,61,63);}
border: none;
border-radius: 5px;
width: 10vw;
height: 3vw;
font-family: 'Gilroy-Medium';
font-size: 20px;
line-height: 23px;
text-align: center;
text-transform: uppercase;
color: #FFFFFF;
margin-top: 1vw;

&:hover {
    transform: scale(1.1);
    color: orange;
}

`;
const M1h13p = styled.p`
font-family: 'Noto Serif JP';
font-style: normal;
font-weight: 900;
font-size: 44px;
line-height: 52px;
color: #2C2A2B;
margin-left: 2vw;
margin-top: 1.2vw;
`;

 
  return (
    <M1>
    <M1A>
      <M1Aimg src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1655238490/reto1-sprint03/brazalete_jiywac.jpg'width="546px"/>
    </M1A>
    <M1B>
      <M1Bh1>Gold Woven Chain </M1Bh1>
      <M1Bh1>Bracelet in Black</M1Bh1>
      
      <M1Bp>This bracelet features a 5MM Stainless Steel chain with Nylon cord</M1Bp>
      <M1Bp>braiding. Each bracelet includes a polishing pad and a cotton</M1Bp>
      <M1Bp>jewelry pouch. Proudly made by hand in Atlanta, GA.</M1Bp>
      <M1h11>Size</M1h11>
      <M1h12>
      <L>S</L>
      <L>M</L>
      <L>L</L>
      </M1h12>
      <M1h13>
      <M1h13button>ADD TO CART</M1h13button> <M1h13p>549.29</M1h13p>
      </M1h13>
    </M1B>
  </M1>
  
  
  
  );
}