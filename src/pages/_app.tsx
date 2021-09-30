import { AppProps } from 'next/app';
import Head from 'next/head';

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
        <GlobalStyles />
        <Component {...pageProps} />
      </>
      )
}

export default MyApp
