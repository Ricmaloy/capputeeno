import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClientProvider } from 'react-query';

import { StoreContextProvider } from '../contexts/storeContext';
import { queryClient } from '../services/react-query/queryClient';

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
        <QueryClientProvider client={queryClient} >
          <StoreContextProvider>
            <GlobalStyles />
            <Component {...pageProps} />
          </StoreContextProvider>
        </QueryClientProvider>
      </>
      )
}

export default MyApp
