import React, { useState } from 'react';

import {
  Bio,
  Container,
  Content,
  Download,
  Footer,
  Heading,
  InfoGrid,
  Spacer
} from './styles';
import Sidebar from '@/components/sideBar';
import PageName from '@/components/pageName';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

const AboutPage: React.FC = () => {
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
    pageTitle: {
      pt: 'Sobre mim',
      en: 'About me'
    },
    bioTitle: {
      pt: 'Eu sou Gusthavo Ramos Miguel,',
      en: 'Hi, I am Gusthavo Ramos Miguel,'
    },
    bioSubtitle: {
      pt: 'Desenvolvedor FrontEnd',
      en: 'FrontEnd Developer'
    },
    bioText: {
      pt: 'Olá! Meu nome é Gusthavo Ramos Miguel. Eu sou desenvolvedor web. Sempre no meu tempo livre estou programando algo ou estudando novas tecnologias.',
      en: "Hello! My name is Gusthavo Ramos Miguel. I am a web developer. I'm always coding something or studying new technologies in my free time."
    },
    available: {
      pt: 'Disponível',
      en: 'Available'
    }
  };

  const handleDownloadResume = () => {
    const lang = detectLanguage();
    let url = '';
    if (lang === 'pt') {
      url = '/Gusthavo Ramos-2024.pdf';
    } else {
      url = '/Gusthavo Ramos-2024EN.pdf';
    }
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'Gusthavo_Ramos_2024.pdf';
    anchor.click();
  };

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen} onOpen={handleSidebarOpen} />
      <Content className={isSidebarOpen ? 'sidebar-open' : ''}>
        <Heading>
          <PageName page={translate('pageTitle', translatesOptions)} />
        </Heading>
        <Bio>
          <h1>
            {translate('bioTitle', translatesOptions)}{' '}
            <span>{translate('bioSubtitle', translatesOptions)}</span>
          </h1>

          <p>{translate('bioText', translatesOptions)}</p>
        </Bio>

        <InfoGrid>
          <div>
            <p>
              <span>Birthday: </span>
              07 Dec 1999
            </p>

            <p>
              <span>Linkedin: </span>
              https://www.linkedin.com/in/gusthavo-rm/
            </p>

            <p>
              <span>Website: </span>
              https://gustha-dev.vercel.app/
            </p>

            <p>
              <span>CLT: </span>
              {translate('available', translatesOptions)}
            </p>
          </div>
          <div>
            <p>
              <span>Age:</span>
              24
            </p>

            <p>
              <span>Email:</span>
              gusthavo.dev@gmail.com
            </p>

            <p>
              <span>Phone:</span>
              +55 11 982735663
            </p>

            <p>
              <span>Freelance:</span>
              {translate('available', translatesOptions)}
            </p>
          </div>
          <div>
            <p>
              <span>City: </span>
              São Paulo-SP
            </p>

            <p>
              <span>Github:</span>
              https://github.com/GusthavoRMiguel
            </p>

            <p>
              <span>Phone:</span>
              +55 11 982735663
            </p>

            <p>
              <span>PJ:</span>
              {translate('available', translatesOptions)}
            </p>
          </div>
        </InfoGrid>

        <Download>
          <button type="button" onClick={handleDownloadResume}>
            Download Resume
          </button>
        </Download>
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

export default AboutPage;
