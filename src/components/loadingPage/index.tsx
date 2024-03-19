import Head from 'next/head';
import { Container } from './styles';

const LoadingPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta
          name="keywords"
          content="desenvolvimento web, portfólio, projetos, desenvolvedor frontend, tecnologia, programação,front-end, Gusthavo Ramos"
        />
      </Head>
      <Container>
        <img src="/hand.gif" alt="Carregando..." />
      </Container>
    </>
  );
};

export default LoadingPage;
