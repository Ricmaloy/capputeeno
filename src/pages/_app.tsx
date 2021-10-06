import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

import { StoreContextProvider } from '../contexts/storeContext';
import { Hydrate } from 'react-query/hydration';

import GlobalStyles from '../styles/global';
import { CartContextProvider } from '../contexts/cartContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 10,
          },
        },
    }))

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
          <Hydrate state={pageProps.dehydratedState}>
            <CartContextProvider>
            <StoreContextProvider>
              <GlobalStyles />
              <Component {...pageProps} />
            </StoreContextProvider>
            </CartContextProvider>
          </Hydrate>
        </QueryClientProvider>
      </>
      )
}

export default MyApp
