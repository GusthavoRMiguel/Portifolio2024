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
            image: '/img/projects/SmartFactory/pc/TelaInicial.png'
          },
          {
            title: 'Tela Gestão à Vista: Visão Simplificada',
            image: '/img/projects/SmartFactory/pc/TelaGestaoSimplificada.png'
          },
          {
            title: 'Tela Gestão à Vista: Visão Completa',
            image: '/img/projects/SmartFactory/pc/TelaGestaoCompleta.png'
          },
          {
            title: 'Tela Ordens de Produção',
            image: '/img/projects/SmartFactory/pc/telaOP.png'
          },
          {
            title: 'Tela Ordens de Produção ( parte 2 )',
            image: '/img/projects/SmartFactory/pc/telaOP1.png'
          }
        ],
        tablet: [
          {
            title: 'Tela Inicial',
            image: '/img/projects/SmartFactory/tablet/TelaInicialTab.png'
          },
          {
            title: 'Tela Gestão Simplificada',
            image:
              '/img/projects/SmartFactory/tablet/TelaGestaoSimplificadaTab.png'
          },
          {
            title: 'Tela Gestão Completa',
            image: '/img/projects/SmartFactory/tablet/TelaGestaoCompletaTab.png'
          },
          {
            title: 'Tela Produtividade',
            image: '/img/projects/SmartFactory/tablet/tabProdutividade.png'
          },
          {
            title: 'Tela IHMS',
            image: '/img/projects/SmartFactory/tablet/IHMS.png'
          },
          {
            title: 'Tela IHMS',
            image: '/img/projects/SmartFactory/tablet/IHMS1.png'
          },
          {
            title: 'Tela IHMS',
            image: '/img/projects/SmartFactory/tablet/IHMS2.png'
          },
          {
            title: 'Tela IHMS',
            image: '/img/projects/SmartFactory/tablet/IHMS3.png'
          },
          {
            title: 'Tela IHMS',
            image: '/img/projects/SmartFactory/tablet/IHMS4.png'
          },
          {
            title: 'Tela IHMS',
            image: '/img/projects/SmartFactory/tablet/IHMS5.png'
          },
          {
            title: 'Tela IHMS',
            image: '/img/projects/SmartFactory/tablet/IHMS6.png'
          },
          {
            title: 'Plano de ação',
            image: '/img/projects/SmartFactory/tablet/actionPlan.png'
          },
          {
            title: 'Nova ordem de produção',
            image: '/img/projects/SmartFactory/tablet/newOrder.png'
          },
          {
            title: 'Tela Qualidade',
            image: '/img/projects/SmartFactory/tablet/Qualidade.png'
          },
          {
            title: 'Tela Qualidade (parte 2)',
            image: '/img/projects/SmartFactory/tablet/Qualidade2.png'
          },
          {
            title: 'Tela Gestão de Mão de Obra',
            image: '/img/projects/SmartFactory/tablet/TabGestaoMaoDeObra.png'
          },
          {
            title: 'Tela Gestão de Produção',
            image: '/img/projects/SmartFactory/tablet/TabGestaoProd.png'
          },
          {
            title: 'Tela Gestão de Produção (parte 2)',
            image: '/img/projects/SmartFactory/tablet/TabGestaoProd2.png'
          },
          {
            title: 'Tela Gestão de Produção(parte 3)',
            image: '/img/projects/SmartFactory/tablet/TabGestaoProd3.png'
          },
          {
            title: 'Tela Gestão de Produção(parte 4)',
            image: '/img/projects/SmartFactory/tablet/TabGestaoProd4.png'
          }
        ],
        smartphone: [
          {
            title: 'Tela Inicial',
            image: '/img/projects/SmartFactory/smartphone/TelaInicialMob.png'
          },
          {
            title: 'Tela Inicial ( parte 2 )',
            image: '/img/projects/SmartFactory/smartphone/TelaInicialMob2.png'
          },
          {
            title: 'Tela Gestão Simplificada',
            image:
              '/img/projects/SmartFactory/smartphone/TelaGestaoSimplificada.png'
          },
          {
            title: 'Tela Gestão Completa',
            image:
              '/img/projects/SmartFactory/smartphone/TelaGestaoCompleta.png'
          },
          {
            title: 'Tela IHMS',
            image: '/img/projects/SmartFactory/smartphone/IHMS1.png'
          },
          {
            title: 'Tela IHMS',
            image: '/img/projects/SmartFactory/smartphone/IHMS2.png'
          },
          {
            title: 'Tela IHMS',
            image: '/img/projects/SmartFactory/smartphone/IHMS3.png'
          },
          {
            title: 'Tela IHMS',
            image: '/img/projects/SmartFactory/smartphone/IHMS4.png'
          },
          {
            title: 'Tela IHMS',
            image: '/img/projects/SmartFactory/smartphone/IHMS5.png'
          },
          {
            title: 'Tela IHMS',
            image: '/img/projects/SmartFactory/smartphone/IHMSup.png'
          },
          {
            title: 'Tela IHMS',
            image: '/img/projects/SmartFactory/smartphone/IHMSup1.png'
          },
          {
            title: 'Tela IHMS',
            image: '/img/projects/SmartFactory/smartphone/IHMSupColeta.png'
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
