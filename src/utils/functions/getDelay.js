export function getDelay(sentence, index, wakeUpTextLength, matrixTextLength) {
   let delay = 0.1;

   const isWakeUpText = sentence.id === 'wakeUp';
   const isMatrixText = sentence.id === 'matrix';
   const isRabbitText = sentence.id === 'whiteRabbit';

   switch (true) {
      case isWakeUpText:
         delay = index * delay;
         break;
      case isMatrixText:
         delay = 0.5 + wakeUpTextLength * delay + index * delay;
         break;
      case isRabbitText:
         delay =
            1 +
            wakeUpTextLength * delay +
            matrixTextLength * delay +
            index * delay;
         break;
      default:
         delay = 0;
   }
   return delay;
}
