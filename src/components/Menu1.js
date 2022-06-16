import React from 'react'
import styled from 'styled-components'

export default function Menu1() {
    const M1 = styled.div`
    height: 37vw;
    display: flex;
    `;
   const M1A = styled.div`
   
    
   `;
   const M1Aimg = styled.img`
   margin-left: 16vw;
   margin-top: 5vw;
   `;
  
   const M1B = styled.div`
   margin-top: 10vw;
    margin-left: 5vw;
   
   `;
   const M1Bh1 = styled.h1`
   font-family: 'Noto Serif JP';
   font-style: normal;
   font-weight: 700;
   font-size: 60px;
   line-height: 69px;
   letter-spacing: 0.05em;
   color: #2C2A2B;
   `;
   const Titulo= styled.div`
   margin: 40px 0px;
   font-family: 'Gilroy-Medium';
  font-size: 38px;
  line-height: 45px;
  letter-spacing: 0.09em;
   color: #3D3D3F;`;
   
   const M1Bp = styled.p`
   font-family: 'Gilroy-Regular';
font-size: 20px;
line-height: 150%;
color: #3D3D3F;
   `;
  
   
   
    return (
        <M1>
        <M1A>
          <M1Aimg src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1655230561/reto1-sprint03/image_12_zbj5cd.png'width="550px"/>
        </M1A>
        <M1B>
          <M1Bh1> J-Shop’s best </M1Bh1>
          <M1Bh1>Collections</M1Bh1>

          <Titulo>Comfort</Titulo>
          <M1Bp>We will reach out to you for the current cost of this </M1Bp>
          <M1Bp>permit. Please contact us for more information. Maui</M1Bp>
          <M1Bp>Divers Jewelry offers extended sizing which may be</M1Bp>
          <M1Bp>subject to an additional cost. Any subsequent resizes</M1Bp>
          <M1Bp>after purchase will incur an additional charge. Please</M1Bp>
          <M1Bp>note some styles cannot be resized due to their</M1Bp>
          <M1Bp>design.</M1Bp>
          
        </M1B>
      </M1>
    )
}