import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Card from './Card/Card';
import SlideButtons from './SlideButtons/SlideButtons';

export default function DropDownCards({ datas, title }) {
   // Contains position for horizontal slide
   const [currentPosition, setCurrentPosition] = useState(0);

   // Contains boolean to handle visibility of next or previous button
   const [viewSlideButton, setViewSlideButton] = useState(false);

   const router = useRouter();
   return (
      <>
         <CardsContainer>
            <h2>{title}</h2>

            {
               // If datas contains less than 5 objects there is no slide buttons
               // If not there is slide buttons
               datas.length <= 5 ? (
                  ''
               ) : (
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

const CardsContainer = styled.section`
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
   transition: transform 0.3s ease-in;
`;
