import { previousCards } from '@/utils/functions/slide';
import ChevronLeftIcon from '@/components/Icons/ChevronLeftIcon';

export default function LeftButton({ currentPosition, setCurrentPosition }) {
   return (
      <button
         onClick={(e) => previousCards(e, currentPosition, setCurrentPosition)}
         className="left-button"
      >
         <ChevronLeftIcon />
      </button>
   );
}
