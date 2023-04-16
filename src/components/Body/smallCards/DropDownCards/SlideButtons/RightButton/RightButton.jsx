import { nextCards } from '@/utils/functions/slide';
import ChevronRightIcon from '@/components/Icons/ChevronRightIcon';

export default function RightButton({ currentPosition, setCurrentPosition }) {
   return (
      <button
         onClick={(e) => nextCards(e, currentPosition, setCurrentPosition)}
         className="right-button"
      >
         <ChevronRightIcon />
      </button>
   );
}
