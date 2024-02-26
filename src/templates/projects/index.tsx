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
  imgTitle: string;
  imgSrc: string;
}

interface CardProps {
  color: string;
  status: string;
  img: string;
  icon: string;
  title: string;
  description: string;
  link: string;
  linkGithub: string;
  info: string;
  screenShots?: ScreenShot[];
}

const ProjectsPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const ano = new Date().getFullYear();
  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const cardData: CardProps[] = [
    {
      color: '#10b981',
      status: 'Online',
      img: '/img/projects/SmartFactory/capa.svg',
      icon: '/codeIcon/icons8-react.svg',
      title: 'SmartFactory',
      description: 'Interface de gerenciamento industrial.',
      link: 'https://smartfactory.com.br/',
      linkGithub: '',
      info: 'Projeto criado em react',
      screenShots: [
        {
          imgTitle: 'Capa do projeto',
          imgSrc: '/img/projects/SmartFactory/capa.svg'
        },
        { imgTitle: 'Teste', imgSrc: '/img/image-1.jpg' },
        { imgTitle: 'Teste 2', imgSrc: '/img/contact.png' }
      ]
    },
    {
      color: '#10b981',
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
      color: '#10b981',
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
      color: '#10b981',
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
      color: '#facc15',
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
                  color={card.color}
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
