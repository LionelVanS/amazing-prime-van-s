// LIBS
import styled from 'styled-components';

// IMPORTED COMPONENTS
import CardsToHover from './CardsToHover/CardsToHover';
import SimpleCards from './SimpleCards/SimpleCards';

// EXPORTED COMPONENT
export default function smallCards({ datas, isHoveredCards }) {
   return (
      <>
         <CardsContainer isHoveredCards={isHoveredCards}>
            {datas.map((data, index) => (
               <Cards key={index}>
                  {isHoveredCards ? (
                     <CardsToHover data={data} />
                  ) : (
                     <SimpleCards data={data} />
                  )}
               </Cards>
            ))}
         </CardsContainer>
      </>
   );
}

// STYLES

const CardsContainer = styled.div`
   height: ${(props) => (props.isHoveredCards ? '30vw' : '')};
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   grid-auto-rows: min-content;
   grid-auto-columns: min-content;
   grid-row-gap: 1vw;
   margin: 0;
`;

const Cards = styled.div`
   width: 95%;
   height: 10vw;
`;
