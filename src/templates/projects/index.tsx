'use client';
import React, { useState } from 'react';

import {
  CardPage,
  Container,
  Content,
  Footer,
  Heading,
  ListCards,
  Spacer
} from './styles';
import Sidebar from '@/components/sideBar';
import PageName from '@/components/pageName';
import Card from './components/card';
import Head from 'next/head';
import CustomSwitch from '@/components/switchTheme';

interface ScreenShot {
  pc?: {
    title: string;
    image: string;
  }[];
  tablet?: {
    title: string;
    image: string;
  }[];
  smartphone?: {
    title: string;
    image: string;
  }[];
}

interface CardProps {
  status: 'Em Desenvolvimento' | 'Online' | 'Pausado';
  img: string;
  icon: string;
  title: string;
  description: string;
  link: string;
  linkGithub: string;
  info: string;
  screenShots?: ScreenShot;
}

const ProjectsPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const ano = new Date().getFullYear();
  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const cardData: CardProps[] = [
    {
      status: 'Online',
      img: '/img/projects/SmartFactory/capa.svg',
      icon: '/codeIcon/icons8-react.svg',
      title: 'SmartFactory',
      description: 'Interface de gerenciamento industrial.',
      link: 'https://smartfactory.com.br/',
      linkGithub: '',
      info: 'Projeto criado em react',
      screenShots: {
        pc: [
          {
            title: 'Tela Inicial',
            image: '/img/projects/SmartFactory/TelaInicialPC.png'
          },
          {
            title: 'Tela Gestão Simplificada',
            image: '/img/projects/SmartFactory/TelaGestaoSimplificadaPC.png'
          },
          {
            title: 'Tela Gestão Completa',
            image: '/img/projects/SmartFactory/TelaGestaoCompletaPC.png'
          }
        ],
        tablet: [
          {
            title: 'Tela Inicial',
            image: '/img/projects/SmartFactory/TelaInicialTab.png'
          },
          {
            title: 'Tela Gestão Simplificada',
            image: '/img/projects/SmartFactory/TelaGestaoSimplificadaTab.png'
          },
          {
            title: 'Tela Gestão Completa',
            image: '/img/projects/SmartFactory/TelaGestaoCompletaTab.png'
          }
        ],
        smartphone: [
          {
            title: 'Tela Inicial',
            image: '/img/projects/SmartFactory/TelaInicialMob1.png'
          },
          {
            title: 'Tela Inicial ( parte 2 )',
            image: '/img/projects/SmartFactory/TelaInicialMob2.png'
          },
          {
            title: 'Tela Gestão Simplificada',
            image: '/img/projects/SmartFactory/TelaGestaoSimplificadaMob.png'
          },
          {
            title: 'Tela Gestão Completa',
            image: '/img/projects/SmartFactory/TelaGestaoCompletaMob.png'
          }
        ]
      }
    },
    {
      status: 'Em Desenvolvimento',
      img: '/img/projects/YG/capa.png',
      icon: '/codeIcon/icons8-react.svg',
      title: 'You Garage',
      description: 'Site para compra e venda de veículos',
      link: '',
      linkGithub: '',
      info: 'Projeto criado em react'
    },
    {
      status: 'Online',
      img: '/img/projects/Portifólio/capa.png',
      icon: '/codeIcon/icons8-nextjs.svg',
      title: 'Portifólio',
      description:
        'Página de portifólio desenvolvida em next com typescript e styled-components',
      link: 'https://gustha-devold.vercel.app',
      linkGithub: '',
      info: 'Projeto criado em react'
    },
    {
      status: 'Online',
      img: '/img/projects/KSG/capa.png',
      icon: '/codeIcon/icons8-nextjs.svg',
      title: 'KSG Vidros para Vans',
      description: 'Site expositório em NextJs com tailwind-css',
      link: 'https://ksg-vidros.vercel.app/',
      linkGithub: '',
      info: 'Projeto criado em react'
    },
    {
      status: 'Online',
      img: '/img/projects/MultiFlix/capa.png',
      icon: '/codeIcon/icons8-javascript.svg',
      title: 'Clone Netflix',
      description: 'Clone NetFlix em javascript com bootstrap  e carrousel.',
      link: 'https://mult-flix.vercel.app/',
      linkGithub: '',
      info: 'Projeto criado em react'
    },
    {
      status: 'Em Desenvolvimento',
      img: '/img/projects/MS/capa.png',
      icon: '/codeIcon/icons8-react.svg',
      title: 'Money Script',
      description:
        'Gestor de finanças desenvolvido em react e banco de dados firebase.',
      link: 'https://money-script.vercel.app/',
      linkGithub: '',
      info: 'Projeto criado em react'
    }
  ];

  return (
    <>
      <Head>
        <title>Projetos | Gusthavo Ramos</title>
      </Head>
      <Container>
        <Sidebar isOpen={isSidebarOpen} onOpen={handleSidebarOpen} />
        <Content className={isSidebarOpen ? 'sidebar-open' : ''}>
          <Heading>
            <PageName page="Projetos" /> <CustomSwitch />
          </Heading>
          <ListCards>
            {cardData.map((card, index) => (
              <CardPage key={index}>
                <Card
                  status={card.status}
                  img={card.img}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  link={card.link}
                  linkGithub={card.linkGithub}
                  info={card.info}
                  screenShots={card.screenShots}
                />
              </CardPage>
            ))}
          </ListCards>
        </Content>
        <Footer className={isSidebarOpen ? 'sidebar-open' : ''}>
          <ul>
            <li>
              <span>GUSTHAVO RAMOS MIGUEL</span>
            </li>
            <li>
              <span>Copyright ©</span>
            </li>
            <li>
              <span>{ano}</span>
            </li>
          </ul>
        </Footer>
        <Spacer />
      </Container>
    </>
  );
};

export default ProjectsPage;
