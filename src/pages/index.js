import Head from 'next/head';
import styled from 'styled-components';
import { useMemo, useState } from 'react';
import AnimatedSentences from '@/components/Body/LandingPage/AnimatedSentences';
import ImageLink from '@/components/Body/LandingPage/ImageLink';
import texts from '@/utils/data/landingPage/textData';

export default function LandingPage() {
   // Contains array of letters
   const [lettersArray, setLettersArray] = useState([]);

   // Contains length of the two first sentences
   const [wakeUpTextLength, setWakeUpTextLength] = useState();
   const [matrixTextLength, setMatrixTextLength] = useState();

   // Get object to put in lettersObject
   useMemo(() => {
      const newLettersArray = texts.map((el) => {
         return {
            id: el.id,
            letters: el.text.split(''),
            length: el.text.length,
         };
      });

      setLettersArray(newLettersArray);
      setWakeUpTextLength(newLettersArray[0].length);
      setMatrixTextLength(newLettersArray[1].length);
   }, []);

   return (
      <>
         <Head>
            <title>Prime Van S</title>
            <meta
               name="description"
               content="Bienvenue sur mon portfolio. Il s'agit d'un clône du site d'Amazon Prime Vidéo."
            />
         </Head>
         <StyledMain>
            <StyledSection>
               <div>
                  {lettersArray.map((sentence, index) => (
                     <ParaphDiv key={index}>
                        <AnimatedSentences
                           sentence={sentence}
                           wakeUpTextLength={wakeUpTextLength}
                           matrixTextLength={matrixTextLength}
                        />
                     </ParaphDiv>
                  ))}
               </div>
               <ImageLink />
            </StyledSection>
         </StyledMain>
      </>
   );
}

const StyledMain = styled.main`
   margin: 0;
`;

const StyledSection = styled.section`
   height: 100vh;
   padding: 3vw;
   display: flex;
   flex-flow: column;
   justify-content: space-between;
`;

const ParaphDiv = styled.div`
   color: #fff;
   font-family: 'Courier Prime', sans-serif;
   font-size: 1.5vw;
   font-weight: 600;
   margin: 1vw 0;
   text-shadow: 0px 0px 9px rgba(120, 196, 117, 1);
`;
