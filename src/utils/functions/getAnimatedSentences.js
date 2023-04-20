export function animatedSentences(
   motion,
   wakeUpLetters,
   matrixLetters,
   letter,
   index
) {
   let delay = 0.1;

   const isWakeUpText = parent === 'wakeUpText';
   const isMatrixText = parent === 'matrixText';
   const isRabbitText = parent === 'rabbitText';

   switch (true) {
      case isWakeUpText:
         delay = index * delay;
         break;
      case isMatrixText:
         delay = 0.5 + wakeUpLetters.length * delay + index * delay;
         break;
      case isRabbitText:
         delay =
            1 +
            wakeUpLetters.length * delay +
            matrixLetters.length * delay +
            index * delay;
         break;
      default:
         delay = 0;
   }

   return letter === ' ' ? (
      <motion.span
         key={index}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: delay, duration: 0 }}
      >
         &nbsp;
      </motion.span>
   ) : (
      <motion.span
         key={index}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: delay, duration: 0 }}
      >
         {letter}
      </motion.span>
   );
}
