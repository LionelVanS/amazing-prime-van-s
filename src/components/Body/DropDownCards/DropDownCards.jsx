import styled from 'styled-components';
import Card from './Card/Card';
// import ChevronButton from '../Buttons/ChevronButton';

export default function DropDownCards({ datas, title }) {
   return (
      <>
         <H2>{title}</H2>
         <CardsContainer>
            {datas.map((data, index) => (
               <Card key={index} data={data} />
            ))}
         </CardsContainer>
      </>
   );
}

const CardsContainer = styled.div`
   width: 500vw;
   height: 35vw;
   margin-left: 3vw;
   display: flex;
   position: relative;
`;

const H2 = styled.h2`
   margin-left: 3.5vw;
`;
