import styled from 'styled-components';
import { devices } from '@/utils/style/breakpoints';
import PreviousButton from './PreviousButton/PreviousButton';
import NextButton from './NextButton/NextButton';
import { useEffect, useState } from 'react';
import { checkIfFirstCard, checkIfLastCard } from '@/utils/functions/getCardId';

export default function SlideButtons({
   viewSlideButton,
   setViewSlideButton,
   data,
   displayedCards,
   setdisplayedCards,
   setAnimationDirection,
   setAnimationKey,
   animationKey,
   numberOfCards,
}) {
   const ButtonsProps = {
      data,
      displayedCards,
      setdisplayedCards,
      setAnimationDirection,
      setAnimationKey,
      animationKey,
      numberOfCards,
   };

   const [isLastCard, setIsLastCard] = useState(false);
   const [isFirstCard, setIsFirstCard] = useState(true);

   useEffect(() => {
      checkIfLastCard(data, displayedCards, setIsLastCard);
      checkIfFirstCard(data, displayedCards, setIsFirstCard);
   }, [displayedCards]);

   return (
      <SliderCommandDiv
         viewSlideButton={viewSlideButton}
         onMouseOver={() => setViewSlideButton(true)}
         onMouseLeave={() => setViewSlideButton(false)}
      >
         {isFirstCard ? '' : <PreviousButton {...ButtonsProps} />}

         {isLastCard ? '' : <NextButton {...ButtonsProps} />}
      </SliderCommandDiv>
   );
}

const SliderCommandDiv = styled.div`
   /* opacity: ${(props) => (props.viewSlideButton ? 1 : 0)}; */
   opacity: 1;
   button {
      background: none;
      border: none;
      z-index: 3;
      cursor: pointer;
      position: absolute;
      top: 20%;
      @media ${devices.mobileL} {
         top: 40%;
      }
      @media ${devices.mobileM} {
         top: 55%;
      }
      @media ${devices.tablet} {
         top: 25%;
      }
   }

   svg {
      width: 2vw;
      fill: #fff;
      @media ${devices.mobileL} {
         width: 3vw;
      }
      @media ${devices.mobileM} {
         width: 2vw;
      }
   }

   .left-button {
      left: 0;
   }
   .right-button {
      right: 0;
   }
`;
