"use client"
import React from 'react';
import{
    ContainerMenu
} from './style'
import Link from 'next/link';

const Menu: React.FC = () => {
  return (
    <ContainerMenu>
        <div className="container">
            <div className="logo">
                <h1>
                    <Link href={'/'}>ServiceON</Link>
                </h1>
            </div>
            <ul className="links">
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/'}>Vagas Abertas</Link>
                </li>
                <li>
                    <Link href={'/'}>Prestadores de Serviços</Link>
                </li>
                <li>
                    <Link href={'/'}>Notícias</Link>
                </li>
                <li>
                    <Link href={'/'}>Contato</Link>
                </li>
            </ul>
        </div>
    </ContainerMenu>
  );
}

export default Menu;