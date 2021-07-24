import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Header from '../components/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>Flags finder</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Component {...pageProps} />
  </>
  );
}
export default MyApp
