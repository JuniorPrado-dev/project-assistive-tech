import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';


export const MyHeader= styled.header`
    display: flex;
    justify-content: space-between;
    background: linear-gradient(90deg, rgba(102,45,145,1) 0%, rgba(27,20,100,1) 100%);
    width: 100%;
`
export const LogoHeader= styled.img`
    height: 5vw;
`
export const MenuHeader= styled.div`
    display: flex;
    align-items: center;
    margin-right: 5vw;
`
export const TextMenu=styled.h2`
    color: #88DDFF;
   // text-transform: uppercase;
     font-size: larger;
     font-family: 'Baloo 2'; 
     letter-spacing: 0.4vw;
    //font-family: 'Orelega One', cursive;
    /* font-family: 'Roboto', sans-serif; */
    :hover{
        font-size: x-large;
    }
`
export const SecMenu=styled.img`
    height: 60%;
    margin:0 1vw 0 1vw;
    /* width: 100px */
`
