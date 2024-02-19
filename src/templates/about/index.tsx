'use client';
import React, { useState } from 'react';

import {
  Bio,
  Container,
  Content,
  Download,
  Footer,
  Heading,
  InfoGrid,
  ProgressContainer,
  Spacer,
  TableInfo
} from './styles';
import Sidebar from '@/components/sideBar';
import PageName from '@/components/pageName';
import Head from 'next/head';
import Timeline from './components/TimeLine';
import ProgLanguage from './components/ProgLanguage';

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
    <>
      <Head>
        <title>Sobre Mim | Gusthavo Ramos</title>
      </Head>
      <Container>
        <Sidebar isOpen={isSidebarOpen} onOpen={handleSidebarOpen} />
        <Content className={isSidebarOpen ? 'sidebar-open' : ''}>
          <Heading>
            <PageName page="Sobre Mim" />
          </Heading>
          <Bio>
            <h1>
              Eu sou Gusthavo Ramos Miguel , <span>Desenvolvedor FrontEnd</span>
            </h1>

            <p>
              Olá! Meu nome é Gusthavo Ramos Miguel, eu sou desenvolvedor web.
              Sempre no meu tempo livre estou programando alguma coisa ou
              estudando novas tecnologias.
            </p>
          </Bio>

          <InfoGrid>
            <div>
              <p>
                <span>Data de Nascimento: </span>
                07 Dez 1999
              </p>

              <p>
                <span>Linkedin: </span>
                https://www.linkedin.com/in/gusthavo-rm/
              </p>

              <p>
                <span>Site: </span>
                https://gustha-dev.vercel.app/
              </p>

              <p>
                <span>CLT: </span>
                Disponível
              </p>
            </div>
            <div>
              <p>
                <span>Idade:</span>
                24
              </p>

              <p>
                <span>Email:</span>
                gusthavo.dev@gmail.com
              </p>

              <p>
                <span>Telefone:</span>
                +55 11 982735663
              </p>

              <p>
                <span>PJ:</span>
                Disponível
              </p>
            </div>
            <div>
              <p>
                <span>Cidade: </span>
                São Paulo-SP
              </p>

              <p>
                <span>Github:</span>
                https://github.com/GusthavoRMiguel
              </p>

              <p>
                <span>Whatsapp:</span>
                +55 11 982735663
              </p>

              <p>
                <span>Freelance:</span>
                Disponível
              </p>
            </div>
          </InfoGrid>

          <Download>
            <button onClick={handleDownloadResume}>Baixar Currículo</button>
          </Download>

          <ProgressContainer>
            <div>
              <div className="languages">
                <h2>Languages</h2>
                <ProgLanguage language="HTML" width="99%" percent={99} />
                <ProgLanguage language="CSS" width="95%" percent={95} />
                <ProgLanguage language="Javascript" width="90%" percent={90} />
              </div>
              <div className="languages">
                <h2>Frameworks</h2>
                <ProgLanguage language="Reactjs" width="80%" percent={80} />
                <ProgLanguage language="Nextjs" width="80%" percent={80} />
                <ProgLanguage language="Angular" width="75%" percent={75} />
              </div>
            </div>
          </ProgressContainer>

          <ProgressContainer>
            <div>
              <TableInfo>
                <h2>Education</h2>
                <div className="box">
                  <div className="content">
                    <div className="line"></div>
                    <ul>
                      <Timeline
                        ano="2021 - 2025"
                        title="Fatec Carapicuiba"
                        description="Jogos Digitais"
                      />
                      <Timeline
                        ano="2018 - 2019"
                        title="CPOR-SP"
                        description="Curso de Formação de Oficiais da Reserva"
                      />
                    </ul>
                  </div>
                </div>
              </TableInfo>
              <TableInfo>
                <h2>Experience</h2>
                <div className="box">
                  <div className="content">
                    <div className="line"></div>
                    <ul>
                      <Timeline
                        ano="2022 - atual"
                        title="Desenvolvedor Front-End"
                        description="SmartFactory - Soluções Industriais"
                      />
                      <Timeline
                        ano="2018 - 2022"
                        title="Asp. Oficial"
                        description="Exército Brasileiro"
                      />
                      <Timeline
                        ano="2015 - 2016"
                        title="Aprendiz Administrativo"
                        description="Via Varejo s/a"
                      />
                    </ul>
                  </div>
                </div>
              </TableInfo>
            </div>
          </ProgressContainer>
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

export default AboutPage;
