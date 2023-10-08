import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

export default function App({ Component, pageProps }) {
   return (
      <>
         <Head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="shortcut icon" href="./images/favicon.png" />
         </Head>
         <GlobalStyle />
         <Component {...pageProps} />
      </>
   );
}

const GlobalStyle = createGlobalStyle`
      * {
         box-sizing: border-box;
         scroll-behavior: smooth!important;
      }
    `;
