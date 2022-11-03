import React from 'react';
import logoh from "../../assets/header/logo-header.png"
import secM from '../../assets/header/section-menu.png'

import { LogoHeader, MenuHeader, MyHeader, SecMenu, TextMenu } from './style';
export default function Header() {
 return (
   <MyHeader>
        <LogoHeader src={logoh}/>
        <MenuHeader>
            <TextMenu>AssistiveTech</TextMenu>
            <SecMenu src={secM}></SecMenu> 
            <TextMenu>Produtos</TextMenu>
            <SecMenu src={secM}></SecMenu> 
            <TextMenu>Serviços</TextMenu>
            <SecMenu src={secM}></SecMenu> 
            <TextMenu>Galeria</TextMenu>
            <SecMenu src={secM}></SecMenu> 
            <TextMenu>Contato</TextMenu>
        </MenuHeader>
   </MyHeader>
 );
}