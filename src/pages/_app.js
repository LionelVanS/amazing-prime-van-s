import { createGlobalStyle } from 'styled-components';

// UTILS
import { colors } from '@/utils/style/colors';

// IMPORTED COMPONENTS
import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/Header';
import Head from 'next/head';

// EXPORTED COMPONENT
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

// STYLES
const GlobalStyle = createGlobalStyle`
      html,
      body {
          padding:0;
          margin:0;
          background-color: ${colors.appBackground};
          @font-face {
            font-family: Amazon-Ember;
            src: url(./font/AmazonEmber.woff2);
          }

          font-family: 'Amazon-Ember', sans-serif;

      }

      * {
         box-sizing: border-box;
      }

      main {
         margin: 0 3.5vw;
      }

      li {
          list-style-type: none;
      }

      a {
         color: white;
         text-decoration: none;
      }
      p {
         color: white;
      }

      ul {
         margin:0;
         padding:0;
      }      

    `;
