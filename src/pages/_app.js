import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { colors } from '@/utils/style/colors';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
   const router = useRouter();
   const isLandingPage = router.asPath === '/';
   return (
      <>
         <Head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="shortcut icon" href="./images/favicon.png" />
         </Head>
         <GlobalStyle isLandingPage={isLandingPage} />
         {!isLandingPage && <Header />}
         <Component {...pageProps} />
         {!isLandingPage && <Footer />}
      </>
   );
}

const GlobalStyle = createGlobalStyle`
      * {
         box-sizing: border-box;
         scroll-behavior: smooth!important;
      }
      html,
      body {
         min-height: 100vh;
         margin:0;
         background-color: ${(props) =>
            props.isLandingPage ? '#000' : colors.appBackground};
         font-family: 'Amazon Ember', sans-serif;
         overflow-x: hidden;
         position:relative;
      }
      main{
         margin-bottom:5vw;
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
