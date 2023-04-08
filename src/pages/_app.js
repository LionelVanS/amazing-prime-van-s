import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

import { colors } from '@/utils/style/colors';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

export default function App({ Component, pageProps }) {
   return (
      <>
         <Head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
         </Head>
         <GlobalStyle />
         <Header />
         <Component {...pageProps} />
         <Footer />
      </>
   );
}

const GlobalStyle = createGlobalStyle`
      html,
      body {
         margin:0;
         background-color: ${colors.appBackground};
         @font-face {
            font-family: Amazon-Ember;
            src: url(./font/AmazonEmber.woff2);
            font-display: swap;
         }
         
         font-family: 'Amazon-Ember', sans-serif;
         overflow-x: hidden;
         position:relative;
      }
      main{
         margin-bottom:5vw;
      }
      * {
         box-sizing: border-box;
      }
      h1,h2, h3, p {
         color:#fff;
      }
      h1{
         font-size: 2.5vw;
      margin: 0;
      }
      h2 {
         margin: 2.5vw 0 1vw 0;
         font-size: 1.5vw;
      }
      li {
          list-style-type: none;
      }

      a {
         color: #fff;
         text-decoration: none;
      }
      ul {
         margin:0;
         padding:0;
      }      

    `;
