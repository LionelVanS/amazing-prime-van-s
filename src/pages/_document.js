import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
   return (
      <Html lang="fr">
         <Head>
            <link
               href="https://fonts.cdnfonts.com/css/amazon-ember"
               rel="stylesheet"
            />
            <link rel="shortcut icon" href="./assets/images/favicon.png" />
            <meta
               name="description"
               content="Bienvenue sur mon portfolio. Il s'agit d'un clône du site prime vidéo."
            />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
