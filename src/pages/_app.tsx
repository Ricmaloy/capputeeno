import { AppProps } from 'next/app';
import Head from 'next/head';
import { StoreContextProvider } from '../contexts/storeContext';

import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <title>capputeeno</title>
          <meta name="theme-color" content="#06092B" />
          <meta
            name="description"
            content="Projeto de desafio front end by Rocketseat"
          />
        </Head>
        <StoreContextProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </StoreContextProvider>
      </>
      )
}

export default MyApp
