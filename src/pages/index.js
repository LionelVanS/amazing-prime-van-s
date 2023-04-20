import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { handleClick } from '@/utils/functions/handleClick';

export default function LandingPage() {
   const router = useRouter();

   return (
      <>
         <Head>
            <title>Prime Van S</title>
            <meta
               name="description"
               content="Bienvenue sur mon portfolio. Il s'agit d'un clône du site d'Amazon Prime Vidéo."
            />
         </Head>
         <main>
            <StyledSection>
               <h1>Lionel VAN SCHELLEBECK</h1>
               <h2>Développeur Web React</h2>

               <Link
                  href="/home"
                  onClick={(e) => handleClick(e, router, { link: '/' })}
               >
                  Entrez
               </Link>
            </StyledSection>
         </main>
      </>
   );
}

const StyledSection = styled.section`
   height: 50vh;
   padding: 3vw;
   display: flex;
   flex-flow: column;
   align-items: center;
   justify-content: center;
   overflow-x: hidden;
`;
