import React from 'react';
import styled from 'styled-components';

export default function Menu3() {
    const M1 = styled.div`
    height: 36vw;
    display: flex;
    `;
   const M1A = styled.div`
   
    
   `;
   const M1Aimg = styled.img`
   margin-left: 16vw;
   margin-top: 0vw;
   `;
  
   const M1B = styled.div`
   margin-top: 3vw;
    margin-left: 5vw;
   
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
   
   const M1h13 = styled.div`
   display: flex;
   margin-top: 3vw;
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
  
    return (

        <M1>
        <M1A>
          <M1Aimg src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1655230562/reto1-sprint03/image_14_vgnxsz.png'width="550px"/>
        </M1A>
        <M1B>
          
          <Titulo>Trendy</Titulo>
          <M1Bp>A collection of hammered gold discs swing from the </M1Bp>
          <M1Bp>top and bottom of a shimmery gold hoop, creating a</M1Bp>
          <M1Bp>noisy fringe. Earring attaches to a standard fishhook </M1Bp>
          <M1Bp>fitting. Sold as one pair of earrings.Other hoop designs</M1Bp>
          <M1Bp>do not complete the circle, but penetrate through the </M1Bp>
          <M1Bp> ear in a post, using the same attachment techniques</M1Bp>
          <M1Bp>apply to stud earrings.</M1Bp>

          <M1h13>
          <M1h13button>GO TO SHOP</M1h13button> 
          </M1h13>
          
        </M1B>
      </M1>
     
    );
}