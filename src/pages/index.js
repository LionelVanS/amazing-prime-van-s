import Head from 'next/head';
import styled from 'styled-components';
import { useMemo, useState } from 'react';
import AnimatedSentences from '@/components/Body/LandingPage/AnimatedSentences';
import ImageLink from '@/components/Body/LandingPage/ImageLink';
import texts from '@/utils/data/landingPage/textData';
import SkipButton from '@/components/Body/LandingPage/SkipButton';
import { devices } from '@/utils/style/breakpoints';

export default function LandingPage() {
   // Contains array of letters
   const [lettersArray, setLettersArray] = useState([]);

   const [letAnimation, setLetAnimation] = useState(true);

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

      setTimeout(() => {
         setLetAnimation(false);
      }, 7500);
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
               {letAnimation ? <SkipButton /> : <ImageLink />}
            </StyledSection>
         </StyledMain>
      </>
   );
}

const StyledMain = styled.main`
   margin: 0;
   @media ${devices.mobileL} {
      margin: 0 !important;
   }
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
