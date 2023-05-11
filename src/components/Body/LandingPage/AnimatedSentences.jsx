import { motion } from 'framer-motion';
import { getDelay } from '@/utils/functions/getDelay';
import styled from 'styled-components';
import { devices } from '@/utils/style/breakpoints';

export default function AnimatedSentences({
   sentence,
   wakeUpTextLength,
   matrixTextLength,
}) {
   return sentence.letters.map((letters, index) => {
      const lettersApparition = {
         initial: { opacity: 0 },
         animate: { opacity: 1 },
         transition: {
            delay: getDelay(
               sentence,
               index,
               wakeUpTextLength,
               matrixTextLength
            ),
            duration: 0,
         },
      };

      return letters === ' ' ? (
         // If the character is a whitespace
         <TextSpan key={index} {...lettersApparition}>
            &nbsp;
         </TextSpan>
      ) : (
         // If the character is a letter
         <TextSpan key={index} {...lettersApparition}>
            {letters}
         </TextSpan>
      );
   });
}

const TextSpan = styled(motion.span)`
   @media ${devices.tablet} {
      font-size: 2vw;
   }
   @media ${devices.mobileL} {
      font-size: 2.5vw;
   }
   @media ${devices.mobileM} {
      font-size: 3vw;
   }
`;
