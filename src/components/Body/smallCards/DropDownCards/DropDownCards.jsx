import styled from 'styled-components';
import { useState } from 'react';
import Card from './Card/Card';
import SlideButtons from './SlideButtons/SlideButtons';

export default function DropDownCards({ datas, title }) {
   // Contains position for horizontal slide
   const [currentPosition, setCurrentPosition] = useState(0);

   // Contains boolean to handle visibility of next or previous button
   const [viewSlideButton, setViewSlideButton] = useState(false);

   return (
      <>
         <CardsContainer>
            <h2>{title}</h2>

            {
               // If datas contains more than 5 objects there is slide buttons
               // If not there is no slide buttons
               datas.length >= 5 && (
                  <SlideButtons
                     currentPosition={currentPosition}
                     setCurrentPosition={setCurrentPosition}
                     viewSlideButton={viewSlideButton}
                     setViewSlideButton={setViewSlideButton}
                  />
               )
            }

            <CardsWrapper
               currentPosition={currentPosition}
               onMouseEnter={() => setViewSlideButton(true)}
               onMouseLeave={() => setViewSlideButton(false)}
            >
               {datas.map((data, index) => (
                  <Card data={data} key={index} />
               ))}
            </CardsWrapper>
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
`;
const CardsWrapper = styled.div`
   position: absolute;
   display: flex;
   margin-left: 3vw;
   transform: translateX(${(props) => props.currentPosition}vw);
   transition: transform 0.5s ease-in-out;
`;
