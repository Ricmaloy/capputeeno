import { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Hydrate } from 'react-query/hydration';

import { ToastContainer } from 'react-toastify';
import { StoreContextProvider } from '../contexts/storeContext';
import { CartContextProvider } from '../contexts/cartContext';

import GlobalStyles from '../styles/global';
import 'react-toastify/dist/ReactToastify.css';

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
              <Component suppressHydrationWarning={true} {...pageProps} />
              <ToastContainer />
            </StoreContextProvider>
            </CartContextProvider>
          </Hydrate>
        </QueryClientProvider>
      </>
      )
}

export default MyApp
