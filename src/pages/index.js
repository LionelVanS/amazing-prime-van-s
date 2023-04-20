import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { handleClick } from '@/utils/functions/handleClick';
import { useEffect, useState } from 'react';
import { converttextToLetters } from '@/utils/functions/convertTextToLetters';
import { motion } from 'framer-motion';
import whiteRabbit from '../../public/images/white-rabbit.png';
import Image from 'next/image';
import { animatedSentences } from '@/utils/functions/getAnimatedSentences';

export default function LandingPage() {
   const router = useRouter();
   const [wakeUpLetters, setWakeUpLetters] = useState();
   const [matrixLetters, setMatrixLetters] = useState();
   const [rabbitLetters, setRabbitLetters] = useState();

   const text = 'Wake up, Recruter...';
   const title = 'The Matrix has you...';
   const rabbit = 'Follow the White Rabbit.';

   useEffect(() => {
      setWakeUpLetters(converttextToLetters(text));
      setMatrixLetters(converttextToLetters(title));
      setRabbitLetters(converttextToLetters(rabbit));
   }, [text, title, rabbit]);

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
               <TextDiv>
                  <AnimateP>
                     {wakeUpLetters &&
                        wakeUpLetters.map((letter, index) =>
                           animatedSentences(
                              motion,
                              wakeUpLetters,
                              matrixLetters,
                              letter,
                              index,
                              (parent = 'wakeUpText')
                           )
                        )}
                  </AnimateP>
                  <AnimateP>
                     {matrixLetters &&
                        matrixLetters.map((letter, index) =>
                           animatedSentences(
                              motion,
                              wakeUpLetters,
                              matrixLetters,
                              letter,
                              index,
                              (parent = 'matrixText')
                           )
                        )}
                  </AnimateP>
                  <AnimateP>
                     {rabbitLetters &&
                        rabbitLetters.map((letter, index) =>
                           animatedSentences(
                              motion,
                              wakeUpLetters,
                              matrixLetters,
                              letter,
                              index,
                              (parent = 'rabbitText')
                           )
                        )}
                  </AnimateP>
               </TextDiv>
               <StyledLinkDiv
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 9 }}
               >
                  <Link
                     href="/home"
                     onClick={(e) => handleClick(e, router, { link: '/' })}
                  >
                     <Image
                        src={whiteRabbit}
                        alt="Visitez mon site portfolio"
                     />
                  </Link>
               </StyledLinkDiv>
            </StyledSection>
         </main>
      </>
   );
}

const StyledSection = styled.section`
   height: 100vh;
   padding: 3vw;
   display: flex;
   flex-flow: column;
   justify-content: space-between;
`;

const AnimateP = styled.p`
   font-family: 'Courier Prime', sans-serif;
   font-size: 1.5vw;
   font-weight: 600;
   margin: 1vw 0;
   text-shadow: 0px 0px 9px rgba(120, 196, 117, 1);
`;
const TextDiv = styled.div``;
const StyledLinkDiv = styled(motion.div)`
   display: flex;
   justify-content: center;
   img {
      width: 4vw;
      height: 4vw;
      transition: transform 100ms ease-in-out;
      :hover {
         transform: scale(1.2);
      }
   }
`;
