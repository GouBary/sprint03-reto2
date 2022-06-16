import React from 'react';
import styled from 'styled-components';

export default function Menu2() {
    const M1 = styled.div`
    height: 43vw;
    display: flex;
    `;
   const M1A = styled.div`
   
    
   `;
   const M1Aimg = styled.img`
   margin-left: 10vw;
   margin-top: 5vw;
   `;
  
   const M1B = styled.div`
   margin-top: 15vw;
    margin-left: 17vw;
   
   `;
   const M1Bh1 = styled.h1`
   font-family: 'Gilroy-Medium';
font-size: 38px;
line-height: 45px;
letter-spacing: 0.09em;
color: #2C2A2B;
   `;
  
   const M1Bp = styled.p`
   
   font-family: 'Gilroy-Regular';
font-size: 20px;
line-height: 150%;
color: #3D3D3F;
   `;
  
    return (
        <M1>
        <M1B>
          
          <M1Bh1>100% Gold</M1Bh1>

         
          <M1Bp>Gold chains were a sign of service to the supreme </M1Bp>
          <M1Bp>beings of a particular religion in the past. Nowadays,</M1Bp>
          <M1Bp>they are symbols of wealth and class. Rap artists were</M1Bp>
          <M1Bp>most likely the ones who brought the custom of </M1Bp>
          <M1Bp>wearing gold chains to modern men's everyday life. </M1Bp>
          <M1Bp>There are a few reasons why do men wear gold chains.</M1Bp>
          
          
        </M1B>
        <M1A>
          <M1Aimg src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1655230561/reto1-sprint03/image_13_qpxsez.png'width="550px"/>
        </M1A>
      </M1>
    );
}