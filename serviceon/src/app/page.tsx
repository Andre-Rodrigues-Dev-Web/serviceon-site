"use client"
import React from 'react';
import { ContentLeft, Content, Sidebar, Theme, Wrap } from './components/theme/style'
import Menu from './components/menu';
import Link from 'next/link';
const Home: React.FC = () => {
  return (
    <Theme>
      <Menu/>
      <Wrap>
        <Sidebar>
          <h2>Vagas mais pesquisadas</h2>
          <ul className="categorias_links">
            <Link href="">Garçonete</Link>
            <Link href="">Professor</Link>
            <Link href="">Motorista</Link>
            <Link href="">Diarista</Link>
            <Link href="">Pedreiro/Servente</Link>
            <Link href="">Cozinheiro</Link>
          </ul>
        </Sidebar>
        <Content>
          
        </Content>
        <ContentLeft>

        </ContentLeft>
      </Wrap>
    </Theme>
  );
}

export default Home;
