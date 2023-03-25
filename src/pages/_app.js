import { createGlobalStyle } from 'styled-components';

// UTILS
import { colors } from '@/utils/style/colors';

// IMPORTED COMPONENTS
import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/Header';

// EXPORTED COMPONENT
export default function App({ Component, pageProps }) {
   return (
      <>
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
          font-family: 'Amazon Ember', sans-serif;
      }

      * {
         box-sizing: border-box;
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
