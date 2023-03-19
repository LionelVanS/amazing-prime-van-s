import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
   return (
      <Html lang="fr">
         <Head>
            <link
               href="https://fonts.cdnfonts.com/css/amazon-ember"
               rel="stylesheet"
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
