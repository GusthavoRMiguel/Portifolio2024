import { AppProps } from 'next/app';
import Head from 'next/head';
import 'semantic-ui-css/semantic.min.css';

import AppProvider from '@/hooks';

import GlobalStyles from '@/styles/global';
import CircleClick from '@/components/circleClick';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <title>Portifólio Gusthavo Ramos</title>
        <link rel="shorcut icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Share+Tech&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Project" />
      </Head>
      <Component {...pageProps} />
      <CircleClick />
      <GlobalStyles />
    </AppProvider>
  );
}

export default App;
