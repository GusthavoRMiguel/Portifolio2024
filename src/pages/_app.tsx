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
        <link rel="shorcut icon" href="/assets/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Project" />
      </Head>
      <Component {...pageProps} />
      <CircleClick />
      <GlobalStyles />
    </AppProvider>
  );
}

export default App;
