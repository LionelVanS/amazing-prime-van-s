import ChevronRightIcon from '@/components/Icons/ChevronRightIcon';
import { handleNextClick } from '@/utils/functions/getCards';

export default function NextButton({
   data,
   setdisplayedCards,
   displayedCards,
   setAnimationDirection,
   setAnimationKey,
   animationKey,
   numberOfCards,
}) {
   return (
      <button
         className="right-button"
         onClick={(e) =>
            handleNextClick(
               e,
               data,
               setdisplayedCards,
               displayedCards,
               setAnimationDirection,
               setAnimationKey,
               animationKey,
               numberOfCards
            )
         }
      >
         <ChevronRightIcon />
      </button>
   );
}
