import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { devices, sizes } from '@/utils/style/breakpoints';
import Card from './Card/Card';
import SlideButtons from './SlideButtons/SlideButtons';
import { handleScreenSizeChanges } from '@/utils/functions/handleScreenSize';
import { getNumberOfCardsToShow } from '@/utils/functions/getNumberOfCardsToShow';

export default function DropDownCards({ data, title }) {
   const [screenWidth, setScreenWidth] = useState();
   const [viewSlideButton, setViewSlideButton] = useState(false);

   const [displayedCards, setdisplayedCards] = useState([]);
   const [numberOfCards, setNumberOfCards] = useState();

   const [animationKey, setAnimationKey] = useState(0);
   const [animationDirection, setAnimationDirection] = useState(null);

   useEffect(() => {
      setScreenWidth(window.innerWidth);
      handleScreenSizeChanges(setScreenWidth);

      getNumberOfCardsToShow(
         screenWidth,
         sizes,
         data,
         setdisplayedCards,
         setNumberOfCards
      );
   }, [screenWidth]);

   // ANIMATION
   const slideAnimation = {
      left: {
         initial: { x: screenWidth },
         animate: { x: 0 },
         exit: { x: -screenWidth },
      },
      right: {
         initial: { x: -screenWidth },
         animate: { x: 0 },
         exit: { x: screenWidth },
      },
      null: {
         initial: { x: 0 },
         animate: { x: 0 },
         exit: { x: -screenWidth },
      },
   };
   const animationVariants = slideAnimation[animationDirection];

   // PROPS
   const slideButtonsProps = {
      viewSlideButton,
      setViewSlideButton,
      data,
      displayedCards,
      setdisplayedCards,
      setAnimationDirection,
      setAnimationKey,
      animationKey,
      numberOfCards,
   };

   const cardsWrapperProps = {
      key: animationKey,
      onMouseOver: () => setViewSlideButton(true),
      onMouseLeave: () => setViewSlideButton(false),
      initial: animationVariants.initial,
      animate: animationVariants.animate,
      exit: animationVariants.exit,
      transition: { duration: 0.7, ease: 'easeInOut' },
   };

   return (
      <>
         <CardsContainer>
            <h2>{title}</h2>
            {data.length > 5 && <SlideButtons {...slideButtonsProps} />}
            <AnimatePresence>
               <CardsWrapper {...cardsWrapperProps}>
                  {displayedCards.map((data, index) => (
                     <Card data={data} key={index} />
                  ))}
               </CardsWrapper>
            </AnimatePresence>
         </CardsContainer>
      </>
   );
}

const CardsContainer = styled.div`
   height: 35vw;
   position: relative;

   h2 {
      margin-left: 3.5vw;
   }
   @media ${devices.mobileL}, ${devices.mobileM} {
      height: 25vw;
   }
`;

const CardsWrapper = styled(motion.div)`
   display: grid;
   grid-auto-flow: column;
   grid-gap: 1vw;
   margin: 0 3.5vw;
   position: absolute;
   @media ${devices.mobileL} {
      width: calc(100% - 7vw);
      grid-gap: 1.5vw;
   }
   @media ${devices.mobileM} {
      grid-gap: 3vw;
   }
`;
