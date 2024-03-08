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
interface Info {
  title: string;
  content: {
    text: string;
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
  info?: Info[];
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

      info: [
        {
          title: 'O que é a Smart Factory:',
          content: [
            {
              text: 'A Smart Factory, é um conceito que se refere à aplicação de tecnologias avançadas, como Internet das Coisas (IoT), Inteligência Artificial (IA) e automação, para transformar as operações de fabricação tradicionais em ambientes altamente eficientes, adaptáveis e conectados digitalmente.'
            },
            {
              text: 'A Smart Factory integra sistemas de produção e de informação em uma única rede inteligente, permitindo o monitoramento em tempo real, análise de dados em larga escala e tomada de decisões baseadas em dados para otimizar a produção, aumentar a qualidade, reduzir custos e melhorar a flexibilidade.'
            }
          ]
        },
        {
          title: 'Desafios da Criação do Front-end:',
          content: [
            {
              text: 'Integração de Dados: Um dos principais desafios é garantir a integração perfeita de dados provenientes de diferentes fontes, como sensores, máquinas e sistemas de gerenciamento, para fornecer uma visão abrangente e precisa do ambiente de produção.'
            },
            {
              text: 'Interface Intuitiva: Desenvolver uma interface de usuário (UI) intuitiva e amigável é crucial para garantir que os operadores possam interagir facilmente com os sistemas da Smart Factory e acessar as informações necessárias para tomar decisões informadas.'
            },
            {
              text: 'Gerenciamento de Dispositivos: A gestão eficiente de dispositivos, incluindo dispositivos IoT, máquinas e terminais de usuário, apresenta desafios em termos de conectividade, segurança e interoperabilidade.'
            },
            {
              text: 'Escalabilidade: O front-end foi projetado para ser escalável, permitindo a expansão fácil e acomodação de novas funcionalidades à medida que a Smart Factory cresce e evolui.'
            }
          ]
        },
        {
          title: 'Tecnologias Usadas:',
          content: [
            {
              text: 'Axios (0.21.4): Uma biblioteca para fazer requisições HTTP de forma fácil e flexível.'
            },
            {
              text: 'Date-fns (2.16.1): Uma biblioteca JavaScript para manipulação de datas, oferecendo funções para formatação, manipulação e cálculos de datas.'
            },
            {
              text: 'Polished (4.1.3): Uma biblioteca de utilitários de estilo para estilização CSS em JavaScript, fornecendo funções para facilitar a manipulação de cores, sombras, gradientes, entre outros.'
            },
            {
              text: 'React (16.14.0) e React-DOM (16.14.0): Framework JavaScript para construir interfaces de usuário reativas e dinâmicas.'
            },
            {
              text: 'React-detect-offline (2.4.5): Uma biblioteca para detectar a conectividade de rede offline em aplicativos React, permitindo uma melhor manipulação de situações em que o aplicativo está sem conexão com a internet.'
            },
            {
              text: 'React-error-boundary (4.0.11): Um componente de limite de erro para React que captura erros em componentes filhos durante a renderização, permitindo um tratamento de erro mais eficiente e uma melhor experiência do usuário.'
            },
            {
              text: 'React-icons (4.2.0): Uma biblioteca de ícones para React que oferece uma grande variedade de ícones prontos para uso.'
            },
            {
              text: 'React-input-mask (3.0.0): Um componente React para criar máscaras de entrada que formatam automaticamente os valores inseridos de acordo com um padrão especificado, útil para entrada de dados como números de telefone, CPFs, entre outros.'
            },
            {
              text: 'React-query (3.23.2): Uma biblioteca para fazer requisições de dados de forma eficiente e gerenciar o estado da aplicação.'
            },
            {
              text: 'React-slider (2.0.4): Um componente deslizante (slider) para React que permite aos usuários selecionar um valor em um intervalo especificado, com suporte para personalização de estilo e comportamento.'
            },
            {
              text: 'React-spring (8.0.27): Uma biblioteca de animação para React que facilita a criação de animações fluidas e naturais.'
            },
            {
              text: 'Recharts (2.2.0): Uma biblioteca de gráficos para React que oferece uma variedade de tipos de gráficos para visualização de dados.'
            },
            {
              text: 'Semantic-ui-react (3.0.0) : Uma biblioteca de componentes de interface do usuário pré-projetados e estilizados, facilitando o desenvolvimento de interfaces consistentes e atraentes.'
            },
            {
              text: 'Styled-components (5.3.1): Biblioteca para estilização de componentes React usando estilos CSS-in-JS, oferecendo escopo de estilo e reutilização de código.'
            },
            {
              text: 'UUID (8.3.2): Uma biblioteca para geração de identificadores únicos universalmente (UUIDs).'
            },
            {
              text: 'Yup (0.32.8): Uma biblioteca de validação de esquemas para JavaScript, útil para validar dados de entrada em formulários.'
            }
          ]
        }
      ],

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
      status: 'Online',
      img: '/img/projects/WP/capa.png',
      icon: '/codeIcon/icons8-react.svg',
      title: 'Worldpedia',
      description: 'Página informativa sobre países.',
      link: 'https://worldpedia-cw6qya3v1-gusthavormiguel.vercel.app/',
      linkGithub: 'https://github.com/GusthavoRMiguel/Worldpedia',

      info: [
        {
          title: 'O que é a Worldpedia:',
          content: [
            {
              text: `
              O Worldpedia é um projeto empolgante criado em React, com o propósito de proporcionar uma experiência interativa e esclarecedora sobre os países ao redor do globo. Utilizando tecnologias modernas e recursos como Axios para se conectar à API Rest Countries, o Worldpedia se destaca como uma ferramenta indispensável para aqueles que desejam aprofundar seus conhecimentos sobre o mundo em que vivemos.`
            }
          ]
        },
        {
          title: 'Desafios da Criação do Front-end:',
          content: [
            {
              text: 'Integração de Dados: Garantir a integração perfeita de dados provenientes de diferentes fontes, como a API Rest Countries, exigiu um planejamento cuidadoso e a implementação de estratégias eficazes de manipulação de dados.'
            },
            {
              text: 'Interface Intuitiva: Desenvolver uma interface de usuário (UI) intuitiva e amigável foi crucial para garantir que os usuários pudessem interagir facilmente com o Worldpedia e acessar as informações desejadas de forma rápida e eficiente.'
            },
            {
              text: 'Escalabilidade: O front-end foi projetado para ser escalável, permitindo a expansão fácil e acomodação de novas funcionalidades à medida que o Worldpedia cresce e evolui.'
            },
            {
              text: 'Persistência de Dados: Garantir a persistência eficiente dos dados foi um desafio crucial durante o desenvolvimento do Worldpedia. Manipular o LocalStorage de forma adequada e segura, especialmente para armazenar o histórico de busca e as preferências de tema dos usuários, exigiu uma abordagem cuidadosa. Isso envolveu lidar com questões como o formato dos dados, gerenciamento de espaço e garantia de integridade, proporcionando uma experiência confiável e consistente para os usuários do Worldpedia.'
            }
          ]
        },
        {
          title: 'Tecnologias Usadas:',
          content: [
            {
              text: 'Axios (0.21.4): Uma biblioteca para fazer requisições HTTP de forma fácil e flexível.'
            },

            {
              text: 'React (16.14.0) e React-DOM (16.14.0): Framework JavaScript para construir interfaces de usuário reativas e dinâmicas.'
            },

            {
              text: 'React-error-boundary (4.0.11): Um componente de limite de erro para React que captura erros em componentes filhos durante a renderização, permitindo um tratamento de erro mais eficiente e uma melhor experiência do usuário.'
            },
            {
              text: 'React-icons (4.2.0): Uma biblioteca de ícones para React que oferece uma grande variedade de ícones prontos para uso.'
            },

            {
              text: 'React-query (3.23.2): Uma biblioteca para fazer requisições de dados de forma eficiente e gerenciar o estado da aplicação.'
            },
            {
              text: 'Styled-components (5.3.1): Biblioteca para estilização de componentes React usando estilos CSS-in-JS, oferecendo escopo de estilo e reutilização de código.'
            },
            {
              text: 'react-google-charts (4.0.1): É uma biblioteca que fornece componentes React para renderizar gráficos utilizando a API do Google Charts. Esses componentes facilitam a integração de gráficos interativos e visualmente atraentes em aplicativos React, permitindo a visualização de dados de forma eficaz e dinâmica. Com o React Google Charts, os desenvolvedores podem criar uma variedade de gráficos, como gráficos de barras, gráficos de pizza, gráficos de linhas e muito mais, aproveitando a poderosa funcionalidade da biblioteca Google Charts.'
            },
            {
              text: 'xlsx (0.18.5): É uma biblioteca para manipulação de arquivos Excel em JavaScript. Ela oferece uma ampla gama de funcionalidades para ler, escrever e manipular planilhas do Excel diretamente em aplicativos desenvolvidos em JavaScript, permitindo a automação de tarefas relacionadas a dados em formatos de planilha.'
            }
          ]
        }
      ]
    },

    {
      status: 'Em Desenvolvimento',
      img: '/img/projects/YG/capa.png',
      icon: '/codeIcon/icons8-react.svg',
      title: 'You Garage',
      description: 'Site para compra e venda de veículos',
      link: '',
      linkGithub: ''
    },
    {
      status: 'Online',
      img: '/img/projects/Portifólio/capa.png',
      icon: '/codeIcon/icons8-nextjs.svg',
      title: 'Portifólio',
      description:
        'Página de portifólio desenvolvida em next com typescript e styled-components',
      link: 'https://gustha-devold.vercel.app',
      linkGithub: 'https://github.com/GusthavoRMiguel/Portifolio2024'
    },
    {
      status: 'Online',
      img: '/img/projects/KSG/capa.png',
      icon: '/codeIcon/icons8-nextjs.svg',
      title: 'KSG Vidros para Vans',
      description: 'Site expositório em NextJs com tailwind-css',
      link: 'https://ksg-vidros.vercel.app/',
      linkGithub: ''
    },
    {
      status: 'Online',
      img: '/img/projects/MultiFlix/capa.png',
      icon: '/codeIcon/icons8-javascript.svg',
      title: 'Clone Netflix',
      description: 'Clone NetFlix em javascript com bootstrap  e carrousel.',
      link: 'https://mult-flix.vercel.app/',
      linkGithub: 'https://github.com/GusthavoRMiguel/CloneNetflix'
    },
    {
      status: 'Em Desenvolvimento',
      img: '/img/projects/MS/capa.png',
      icon: '/codeIcon/icons8-react.svg',
      title: 'Money Script',
      description:
        'Gestor de finanças desenvolvido em react e banco de dados firebase.',
      link: 'https://money-script.vercel.app/',
      linkGithub: 'https://github.com/GusthavoRMiguel/MoneyScript'
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
