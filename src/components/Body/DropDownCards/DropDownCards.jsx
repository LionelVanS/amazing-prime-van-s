import styled from 'styled-components';
import Card from './Card/Card';
// import ChevronButton from '../Buttons/ChevronButton';

export default function DropDownCards({ datas, isHoveredCards }) {
   return (
      <>
         <CardsContainer>
            {datas.map((data, index) => (
               <Card key={index} data={data} isHoveredCards={isHoveredCards} />
            ))}
         </CardsContainer>
      </>
   );
}

const CardsContainer = styled.div`
   width: 500vw;
   height: 35vw;
   display: flex;
   overflow-x: visible;
   position: relative;
`;
