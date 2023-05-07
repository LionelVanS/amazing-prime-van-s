import ChevronLeftIcon from '@/components/Icons/ChevronLeftIcon';
import { handlePreviousClick } from '@/utils/functions/getCards';

export default function PreviousButton({
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
         className="left-button"
         onClick={(e) =>
            handlePreviousClick(
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
         <ChevronLeftIcon />
      </button>
   );
}
