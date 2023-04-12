"use client"
import React from 'react';
import { ContentLeft, Content, Sidebar, Theme, Wrap } from './components/theme/style'
import Menu from './components/menu';
import Link from 'next/link';
import Head from 'next/head';
import { Container, Row } from './components/grids/style';

const Home: React.FC = () => {
  return (
    <Theme>
      <Head>
        <title>ServiceOn - Home</title>
        <meta name="description" content="" />
        <meta name="keywords" content="ServiceON, vagas de emprego, cursos, divulgue uma vaga com a gente, divulgue seu serviço com a gente" />
        <meta name="author" content="André Laurentino Rodrigues" />
      </Head>
      <Menu/>
      <Wrap>
        <Sidebar>
          <h2>Vagas mais pesquisadas</h2>
          <ul className="categorias_links">
            <Link href="">Garçon/Garçonete</Link>
            <Link href="">Professor(a)</Link>
            <Link href="">Motorista</Link>
            <Link href="">Diarista</Link>
            <Link href="">Pedreiro/Servente</Link>
            <Link href="">Cozinheiro(a)</Link>
            <Link href="">Repositor(a)</Link>
          </ul>
          <h2>Cursos mais pesquisados</h2>
          <ul className="categorias_links">
            <Link href="">Inglês</Link>
            <Link href="">Gastronomia</Link>
            <Link href="">Marketing</Link>
            <Link href="">Informática Básica</Link>
          </ul>
        </Sidebar>
        <Content>
          <Container>
            <Row>
              <div className="col-12"></div>
            </Row>
          </Container>
        </Content>
        <ContentLeft>
          <h2>Parceiros</h2>
        </ContentLeft>
      </Wrap>
    </Theme>
  );
}

export default Home;
