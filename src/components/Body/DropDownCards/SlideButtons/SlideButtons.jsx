import styled from 'styled-components';
import { previousCards, nextCards } from '@/utils/functions/slide';
import { colors } from '@/utils/style/colors';
import ChevronLeftIcon from '@/components/Icons/ChevronLeftIcon';
import ChevronRightIcon from '@/components/Icons/ChevronRightIcon';

export default function SlideButtons({
   currentPosition,
   setCurrentPosition,
   viewSlideButton,
   setViewSlideButton,
}) {
   return (
      <SliderCommandDiv
         viewSlideButton={viewSlideButton}
         onMouseOver={() => setViewSlideButton(true)}
         onMouseLeave={() => setViewSlideButton(false)}
      >
         {
            // If user is in start of cards, there is no previous button
            currentPosition == 0 ? (
               ''
            ) : (
               <button
                  onClick={(e) =>
                     previousCards(e, currentPosition, setCurrentPosition)
                  }
                  className="left-button"
               >
                  <ChevronLeftIcon />
               </button>
            )
         }
         {
            // If user is in end of cards, there is no next button
            currentPosition == -78 ? (
               ''
            ) : (
               <button
                  onClick={(e) =>
                     nextCards(e, currentPosition, setCurrentPosition)
                  }
                  className="right-button"
               >
                  <ChevronRightIcon />
               </button>
            )
         }
      </SliderCommandDiv>
   );
}

const SliderCommandDiv = styled.div`
   width: 100%;
   position: absolute;
   opacity: ${(props) => (props.viewSlideButton ? 1 : 0)};
   button {
      height: 10vw;
      background: none;
      border: none;
      z-index: 3;
      cursor: pointer;
   }
   svg {
      width: 2vw;
      fill: ${colors.text};
   }

   .left-button {
      position: absolute;
      left: 0;
   }
   .right-button {
      position: absolute;
      right: 0;
   }
`;
