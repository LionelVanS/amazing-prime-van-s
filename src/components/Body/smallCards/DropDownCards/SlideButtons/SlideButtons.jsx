import styled from 'styled-components';
import { colors } from '@/utils/style/colors';
import LeftButton from './LeftButton/LeftButton';
import RightButton from './RightButton/RightButton';

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
            currentPosition != 0 && (
               <LeftButton
                  currentPosition={currentPosition}
                  setCurrentPosition={setCurrentPosition}
               />
            )
         }

         {
            // If user is in end of cards, there is no next button
            currentPosition != -78 && (
               <RightButton
                  currentPosition={currentPosition}
                  setCurrentPosition={setCurrentPosition}
               />
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
