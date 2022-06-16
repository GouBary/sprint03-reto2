import React from 'react';
import About from './About';
import Shop from './Shop';
import Shop2 from './Shop2';
import Menu1 from './Menu1';
import Menu2 from './Menu2';
import Menu3 from './Menu3';
import Comunicacion from './Comunicacion';
import styled,{createGlobalStyle} from 'styled-components';

export default function Principal() {
  const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    
    background-color:  RGB(248,243,233);
  }
  
`;
  const Header = styled.div`
  background-color: RGB(248,243,233);
  display: flex;
  width: 100%;
  height: 5vw;
`;
const Hh2 = styled.h2`
  padding-left: 2vw;
  padding-top: 1.5vw;
  font-size: 1.3vw;
`;
const HB = styled.div`
  margin-left: 30vw;
  width: 28vw;
`;
const Hbuttons = styled.button`
background-color: RGB(248,243,233);
width: 100px;
margin: 40px 15px;
font-size: 16px;
border: none;

&:hover {
  color: orange;
  transform: scale(1.5);
}
`;
const Img2 = styled.img`
  margin-left: 15vw;
  margin-top: 5vw;
  width: 1146px;
  `;
const Img3 = styled.img`
margin-left: 12vw;
margin-top: 1.3vw;`;

  return (
    
    <React.Fragment>
      <GlobalStyle/>
      <Header>
      <Hh2>J-Shop</Hh2>
      <HB>
      <Hbuttons>Categories</Hbuttons>
      <Hbuttons>About</Hbuttons>
      <Hbuttons>Shop</Hbuttons>
      <Hbuttons>Contact</Hbuttons>
      
      </HB>
      <>
     <Img3 src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1655321299/iconos_bxuruw.jpg'width="160px" height="45px"/>
      </>
      </Header>
      <About/>
      <Shop/>
      <Shop2/>
      <Menu1/>
      <Menu2/>
      <Menu3/>
      <>
        <Img2 src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1655260379/reto1-sprint03/imagenes_111_gpdqth.jpg'/>
      </>
      <Comunicacion/>
    </React.Fragment>
   
  );
}
