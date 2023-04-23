import { motion } from 'framer-motion';
import { getDelay } from '@/utils/functions/getDelay';

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
         <motion.span key={index} {...lettersApparition}>
            &nbsp;
         </motion.span>
      ) : (
         // If the character is a letter
         <motion.span key={index} {...lettersApparition}>
            {letters}
         </motion.span>
      );
   });
}
