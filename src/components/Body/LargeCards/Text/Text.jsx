import styled from 'styled-components';
import { useLargeCard } from '@/utils/context/largeCard';
import { devices } from '@/utils/style/breakpoints';

export default function Text() {
   const data = useLargeCard();
   const text = data.text;

   return (
      <TextDiv>
         {text.map((paraph, index) => (
            <p key={index}>{paraph.paraph}</p>
         ))}
      </TextDiv>
   );
}

const TextDiv = styled.div`
   display: flex;
   flex-flow: column;
   gap: 0.5vw;
   margin-top: 1vw;
   p {
      font-size: 1.2vw;
      margin: 0;
      @media ${devices.tablet} {
         font-size: 1.5vw;
      }
      @media ${devices.mobileL} {
         font-size: 2vw;
      }
      @media ${devices.mobileM} {
         font-size: 2.5vw;
      }
   }
`;
