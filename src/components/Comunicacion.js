import React from 'react'
import styled,{createGlobalStyle} from 'styled-components';


export default function Comunicacion() {
    const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    body{
        background-color:  RGB(248,243,233);
    }
    `;
    const Div = styled.div`
    padding-left:15%;
    padding-top:5%;
    width: 80%;
    `
    const Tittle = styled.h1`
    padding-left:42%;
    padding-top: 0.5%;
    width: 58%;
    height: 5vh;
    `
    const Conteiner = styled.div`
    margin-top:10%;
    margin-left:0%;
    width: 100%;
    `
    const Form = styled.form`
    padding-left:30%;
    padding-top: 1%;
    width: 70%;
    height: 15vh;
    `
    const Barra = styled.input`
    width: 30vw;
    height: 3vw;
    font-family: 'Gilroy-Medium';
    font-size: 20px;
    `
    const M1h13button = styled.input`
   background-color: RGB(61,61,63);
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
    const Div3 = styled.div`
    margin-top:5%;
    padding-left:18%;
    width: 79%;
    `;
    const Impon = styled.div`
 width: 100%;
 height: 7vw;
 font-size: 16px;
line-height: 27px;
margin-top: 5vw;
margin-left: 18vw;
    `;
    const Footer = styled.footer`
    background-color: RGB(61,61,63);
    text-align:center;
    margin-top:10vw;
    width: 100%;
    padding-top: 2vw;
 height: 3vw;
 font-family: 'Gilroy-Medium';
font-size: 14px;
line-height: 16px;
color:white;
    `;




    return (
        <div>
        <GlobalStyle />
        <Div>
            <img src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1655256991/reto1-sprint03/negrita_ip2xks.jpg" />
        </Div>
        <Conteiner>
            <Tittle>Join J-Shop’s Family</Tittle>
            <Form>
                <label>
                    <Barra type="text" value="Enter your email" />
                </label>
                <M1h13button type="submit" value="JOIN FAMILY" />
            </Form>
        </Conteiner>
        <Div3>
            <img src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1655260314/reto1-sprint03/imagenes_777_l1fo8u.jpg" />
        </Div3>
        <Impon>
           <div>
           <img src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1655314687/reto1-sprint03/abajo_w8qtqf.jpg'/>
           </div>
        </Impon>
        <Footer>
            <p>© 2020 J-Shop. All rights reserved.</p>
            </Footer>        
       
       
    </div>
    )
}