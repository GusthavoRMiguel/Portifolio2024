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
  TableInfo,
  TimeLineContainer
} from './styles';
import Sidebar from '@/components/sideBar';
import PageName from '@/components/pageName';
import Head from 'next/head';
import Timeline from './components/TimeLine';
import CustomSwitch from '@/components/switchTheme';
import ProgressBar from './components/ProgressBar';

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
            <PageName page="Sobre Mim" /> <CustomSwitch />
          </Heading>
          <Bio>
            <h1>
              Olá! Meu nome é <span>Gusthavo Ramos Miguel</span>, sou
              desenvolvedor front-end , migrando para fullstack.
            </h1>
            <p>
              Com uma paixão pelo desenvolvimento web e uma sólida experiência
              em gestão e operações, sou um profissional multifacetado que
              combina habilidades técnicas com conhecimentos em liderança e
              organização.
            </p>
            <p>
              Minha jornada começou como jovem aprendiz no varejo, onde adquiri
              valiosos insights sobre gerenciamento de lojas, controle de
              estoque e administração. Em seguida, servi no Exército Brasileiro,
              no CPOR de São Paulo, uma instituição reconhecida por formar
              líderes. Lá, completei o Curso Preparatório de Oficiais da Reserva
              (CPOR), mergulhando em princípios de hierarquia, organização e
              gestão de recursos, desenvolvendo habilidades essenciais como
              foco, resiliência e eficiência no tempo.
            </p>
            <p>
              {' '}
              Em 2021, mergulhei no mundo da programação e descobri minha paixão
              por criar soluções inovadoras e funcionais. Ao longo do tempo,
              adquiri expertise em uma variedade de tecnologias, incluindo
              React, TypeScript, Node.js e MongoDB, entre outras.
            </p>
            <p>
              {' '}
              Meu trabalho como desenvolvedor front-end na You Garage me
              permitiu aplicar essas habilidades no desenvolvimento de um site
              de compra e venda de carros, desde a lógica de cadastro e login
              até a integração com APIs e criação de interfaces de usuário
              intuitivas e responsivas.
            </p>
            <p>
              {' '}
              Atualmente, na Smart Factory, estou envolvido no desenvolvimento
              de soluções de software para gestão fabril, onde traduzo dados
              complexos em interfaces acessíveis e informativas. Desde a criação
              de dashboards dinâmicos até o design de interfaces homem-máquina
              para operadores de máquinas, estou comprometido em impulsionar a
              eficiência e a produtividade em ambientes industriais.
            </p>
            <p>
              {' '}
              Combinando minha experiência em desenvolvimento web adquirida
              principalmente através de bootcamps, aprendizado autodidata e o
              curso de Jogos Digitais na Fatec, juntamente com minha experiência
              prática em gestão e operações, estou preparado para enfrentar
              desafios complexos e impulsionar a inovação em qualquer ambiente
              de trabalho. Sou motivado pela oportunidade de criar soluções
              impactantes que simplificam processos e melhoram a vida das
              pessoas.
            </p>
          </Bio>
          <InfoGrid>
            <div className="line">
              <div>
                <p>
                  <span>Data de Nascimento: </span>
                  07 Dez 1999
                </p>
              </div>
              <div>
                <p>
                  <span>Idade:</span>
                  24
                </p>
              </div>
              <div>
                <p>
                  <span>Cidade: </span>
                  São Paulo-SP
                </p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <span>Linkedin: </span>
                  https://www.linkedin.com/in/gusthavo-rm/
                </p>
              </div>
              <div>
                <p>
                  <span>Site: </span>
                  https://gustha-dev.vercel.app/
                </p>
              </div>
              <div>
                <p>
                  <span>Github:</span>
                  https://github.com/GusthavoRMiguel
                </p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <span>Email:</span>
                  gusthavo.dev@gmail.com
                </p>
              </div>
              <div>
                <p>
                  <span>Telefone:</span>
                  +55 11 982735663
                </p>
              </div>
              <div>
                <p>
                  <span>Whatsapp:</span>
                  +55 11 982735663
                </p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <span>CLT: </span>
                  Disponível
                </p>
              </div>
              <div>
                <p>
                  <span>PJ:</span>
                  Disponível
                </p>
              </div>
              <div>
                <p>
                  <span>Freelance:</span>
                  Disponível
                </p>
              </div>
            </div>
          </InfoGrid>
          <Download>
            <button onClick={handleDownloadResume}>Baixar Currículo</button>
          </Download>
          <ProgressContainer>
            <div>
              <div className="languages">
                <h2>Linguagens</h2>
                <ProgressBar language="HTML" width="99%" percent={99} />
                <ProgressBar language="CSS" width="96%" percent={96} />
                <ProgressBar language="Javascript" width="95%" percent={95} />
                <ProgressBar language="Typescript" width="90%" percent={90} />
              </div>

              <div className="languages">
                <h2>Frameworks</h2>
                <ProgressBar language="Reactjs" width="90%" percent={80} />
                <ProgressBar language="Nextjs" width="80%" percent={80} />
                <ProgressBar language="NodeJs" width="70%" percent={70} />
                <ProgressBar language="Angular" width="75%" percent={75} />
                <ProgressBar language="Bootstrap" width="70%" percent={70} />
                <ProgressBar language="Express" width="50%" percent={50} />
              </div>

              <div className="languages">
                <h2>Bibliotecas</h2>
                <ProgressBar
                  language="Styled-Components"
                  width="99%"
                  percent={99}
                />
                <ProgressBar
                  language="React Semantic UI"
                  width="80%"
                  percent={80}
                />{' '}
                <ProgressBar language="Tailwind" width="75%" percent={75} />
                <ProgressBar language="MongoDB" width="60%" percent={60} />
                <ProgressBar
                  language="Frammer Motion"
                  width="70%"
                  percent={70}
                />
                <ProgressBar language="Yup" width="80%" percent={80} />
              </div>
              <div className="languages">
                <h2> Ferramentas</h2>
                <ProgressBar language="JEST" width="60%" percent={60} />
                <ProgressBar language="API REST" width="80%" percent={80} />
                <ProgressBar language="Vercel" width="95%" percent={95} />
                <ProgressBar language="Firebase" width="75%" percent={75} />
                <ProgressBar language="GIT" width="90%" percent={90} />
                <ProgressBar language="VSCODE" width="95%" percent={95} />
              </div>
            </div>
          </ProgressContainer>
          <TimeLineContainer>
            <div>
              <TableInfo>
                <h2>Education</h2>
                <div className="box">
                  <div className="content">
                    <div className="line"></div>
                    <ul>
                      <Timeline
                        ano="2021 - 2025"
                        title="Jogos Digitais"
                        type="graduação"
                        local="Fatec Carapicuiba"
                        description=""
                      />
                      <Timeline
                        ano="2018 - 2019"
                        title="Curso de Formação de Oficiais da Reserva"
                        type="curso militar"
                        local="CPOR-SP"
                        description=""
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
                        type="tempo integral"
                        local="SmartFactory - Soluções Industriais"
                        description="Como desenvolvedor front-end na SmartFactory, concentro meus esforços no aprimoramento e desenvolvimento de interfaces para gestão industrial, aplicando minhas habilidades em React. Durante minha atuação, dedico-me à evolução contínua das interfaces de usuário, implementando designs intuitivos e funcionais para otimizar a experiência de gestão na indústria. Meu papel inclui aprimorar a usabilidade, a acessibilidade e a eficiência das interfaces, alinhando-as às necessidades específicas da SmartFactory. Essa experiência é fundamental para fortalecer minha expertise no desenvolvimento de interfaces responsivas, ao mesmo tempo que amplia meu entendimento das demandas e desafios presentes nos ambientes industriais."
                      />
                      <Timeline
                        ano="2023 - atual"
                        title="Desenvolvedor Front-End"
                        type="freelancer"
                        local="You Garage"
                        description="Estou atualmente engajado como freelancer em um projeto voltado para o desenvolvimento de um website dedicado à compra e venda de automóveis, bem como na elaboração da interface de gestão interna. Nesse contexto, aplico minhas habilidades em React, TypeScript e outras tecnologias relevantes para garantir uma experiência eficiente e intuitiva tanto para os usuários finais quanto para os administradores do sistema."
                      />
                      <Timeline
                        ano="2018 - 2022"
                        title="Asp. Oficial"
                        type="tempo integral"
                        local="Exército Brasileiro"
                        description="Durante este período, servi como aspirante a oficial no Exército Brasileiro, onde completei o Curso Preparatório de Oficiais da Reserva (CPOR), e realizei o curso de operações de garantia da ordem (GLO), desenvolvendo habilidades essenciais em liderança, organização e gestão de recursos e planejamento estratégico."
                      />
                      <Timeline
                        ano="2015 - 2016"
                        title="Aprendiz Serv. Administrativo"
                        type="meio período"
                        local="Via Varejo S/A"
                        description="Como aprendiz administrativo na Via Varejo S/A (Ponto Frio), fui responsável por uma variedade de atividades, incluindo gestão de estoque e inventário. Além disso, desempenhei funções no setor de Recursos Humanos, como análise e correção de folha de ponto, e tive a oportunidade de trabalhar brevemente no setor de vendas, realizando atendimento ao público. Essa experiência me proporcionou valiosos insights na gestão de pessoas e processos da filial, enquanto colaborava diretamente com a gerência."
                      />
                    </ul>
                  </div>
                </div>
              </TableInfo>
            </div>
          </TimeLineContainer>{' '}
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
        </Content>
      </Container>
    </>
  );
};

export default AboutPage;
