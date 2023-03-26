import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
   return (
      <Html lang="fr">
         <Head>
            <link rel="shortcut icon" href="./images/favicon.png" />
            <meta
               name="description"
               content="Bienvenue sur mon portfolio. Il s'agit d'un clône du site prime vidéo."
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
