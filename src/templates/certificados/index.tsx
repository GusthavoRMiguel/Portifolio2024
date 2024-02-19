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

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

interface CardProps {
  color: string;
  status: string;
  img: string;
  icon: string;
  title: string;
  description: string;
  link: string;
}

const CertificatesPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const ano = new Date().getFullYear();
  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const detectLanguage = () => {
    if (typeof window !== 'undefined') {
      const userLanguages = navigator.languages || [navigator.language];
      const primaryLanguage = userLanguages[0].startsWith('pt') ? 'pt' : 'en';
      return primaryLanguage;
    }

    return 'en';
  };

  const translate = (key: string, translations: Translations) => {
    const language = detectLanguage();
    return translations[key][language] || key;
  };

  const translatesOptions = {
    Certificates: {
      pt: 'Certificados',
      en: 'Certificates'
    }
  };

  const cardData: CardProps[] = [
    {
      color: '#6366f1',
      status: 'DIO',
      img: '/img/certificados/client-server.jpg',
      icon: '/img/icons8-mysql.svg',
      title: 'Entendendo Comunicação Client x Server',
      description: '11/10/2022',
      link: ''
    },
    {
      color: '#6366f1',
      status: 'DIO',
      img: '/img/certificados/construindo-bootstrap.jpg',
      icon: '/img/icons8-bootstrap.svg',
      title: 'Construindo páginas para internet com Bootstrap',
      description: '23/06/2022',
      link: ''
    },
    {
      color: '#6366f1',
      status: 'DIO',
      img: '/img/certificados/debugging-js.jpg',
      icon: '/img/icons8-javascript.svg',
      title: 'Debugging e Error Handling com JavaScript',
      description: '04/07/2022',
      link: ''
    },
    {
      color: '#6366f1',
      status: 'DIO',
      img: '/img/certificados/dev-moderno.jpg',
      icon: '/img/icons8-dev.svg',
      title: 'Introdução ao Desenvolvimento Moderno de Software',
      description: '29/08/2022',
      link: ''
    },
    {
      color: '#6366f1',
      status: 'DIO',
      img: '/img/certificados/forms.jpg',
      icon: '/img/icons8-html.svg',
      title: 'Trabalhando com Formulários',
      description: '18/10/2022',
      link: ''
    },
    {
      color: '#6366f1',
      status: 'DIO',
      img: '/img/certificados/html-format.jpg',
      icon: '/img/icons8-html.svg',
      title: 'Estruturando seu HTML + Formatações',
      description: '27/10/2022',
      link: ''
    },
    {
      color: '#6366f1',
      status: 'DIO',
      img: '/img/certificados/html-napratica.jpg',
      icon: '/img/icons8-html.svg',
      title: 'Introdução ao HTML na Prática',
      description: '11/10/2022',
      link: ''
    },
    {
      color: '#6366f1',
      status: 'DIO',
      img: '/img/certificados/intro-bdados.jpg',
      icon: '/img/icons8-mysql.svg',
      title: 'Introdução a Banco de Dados',
      description: '05/09/2022',
      link: ''
    },
    {
      color: '#6366f1',
      status: 'DIO',
      img: '/img/certificados/intro-git.jpg',
      icon: '/img/icons8-git.svg',
      title: 'Introdução ao Git e ao GitHub',
      description: '12/09/2022',
      link: ''
    },
    {
      color: '#6366f1',
      status: 'DIO',
      img: '/img/certificados/intro-html5.jpg',
      icon: '/img/icons8-html.svg',
      title: 'Introdução a Criação de Websites com HTML5 e CSS3',
      description: '20/06/2022',
      link: ''
    },
    {
      color: '#6366f1',
      status: 'DIO',
      img: '/img/certificados/intro-prog.jpg',
      icon: '/img/icons8-dev.svg',
      title: 'Introdução à Programação e Pensamento Computacional',
      description: '07/10/2022',
      link: ''
    },
    {
      color: '#6366f1',
      status: 'DIO',
      img: '/img/certificados/intro-tailwind.jpg',
      icon: '/img/icons8-tailwind.svg',
      title: 'Introdução ao Tailwind CSS',
      description: '23/08/2022',
      link: ''
    },
    {
      color: '#6366f1',
      status: 'DIO',
      img: '/img/certificados/js-async.jpg',
      icon: '/img/icons8-javascript.svg',
      title: 'Fundamentos de JavaScript Assíncrono',
      description: '05/07/2022',
      link: ''
    },
    {
      color: '#6366f1',
      status: 'DIO',
      img: '/img/certificados/logica-essencial.jpg',
      icon: '/img/icons8-dev.svg',
      title: 'Lógica de Programação Essencial',
      description: '25/04/2022',
      link: ''
    }
  ];

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen} onOpen={handleSidebarOpen} />
      <Content className={isSidebarOpen ? 'sidebar-open' : ''}>
        <Heading>
          <PageName page={translate('Certificates', translatesOptions)} />
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
                link={card.link || ''}
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
  );
};

export default CertificatesPage;
