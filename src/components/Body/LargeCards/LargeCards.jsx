import styled from 'styled-components';

export default function LargeCards() {
   return (
      <>
         <CardsSection>
            <h1>MON PROFIL</h1>
         </CardsSection>
      </>
   );
}

const CardsSection = styled.section`
   width: 100%;
   height: 93vh;
   padding: 7vw 3.5vw;
   background-color: beige;

   h1 {
      margin: 0;
   }
`;
