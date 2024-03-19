import { AppProps } from 'next/app';
import Head from 'next/head';
import 'semantic-ui-css/semantic.min.css';

import AppProvider from '@/hooks';

import GlobalStyles from '@/styles/global';
import CircleClick from '@/components/circleClick';
import { Suspense } from 'react';
import LoadingPage from '@/components/loadingPage';

function App({ Component, pageProps }: AppProps) {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gusthavo Ramos Miguel',
    url: 'https://gustha-dev.vercel.app/',
    jobTitle: 'Desenvolvedor Frontend',
    worksFor: {
      '@type': 'Organization',
      name: 'SmartFactory - Soluções Industriais'
    },
    birthDate: '1999-12-07',
    gender: 'Male',
    email: 'gusthavo.dev@gmail.com',
    telephone: '+55 (11) 98273-5663',
    sameAs: [
      'https://www.linkedin.com/in/gusthavo-rm/',
      'https://github.com/GusthavoRMiguel'
    ],
    action: {
      '@type': 'ViewAction',
      name: 'View Portfolio',
      url: 'https://gustha-dev.vercel.app/'
    }
  };

  return (
    <AppProvider>
      <Head>
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Share+Tech&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://gustha-dev.vercel.app/" />
        <meta name="author" content="Gusthavo Ramos Miguel" />
        <meta property="og:url" content="https://gustha-dev.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Language" content="pt-BR" />{' '}
        <meta
          name="keywords"
          content="desenvolvimento web, portfólio, projetos, desenvolvedor frontend, tecnologia, programação,front-end, Gusthavo Ramos"
        />
        <meta name="revised" content="19/03/2024" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Head>
      <Suspense fallback={<LoadingPage />}>
        <Component {...pageProps} />
      </Suspense>

      <CircleClick />
      <GlobalStyles />
    </AppProvider>
  );
}

export default App;
