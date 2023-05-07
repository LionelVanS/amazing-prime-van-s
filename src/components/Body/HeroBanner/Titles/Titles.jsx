import { useHeroBanner } from '@/utils/context/heroBanner';
import { devices } from '@/utils/style/breakpoints';
import styled from 'styled-components';

export default function Titles() {
   const data = useHeroBanner();
   return (
      <>
         <Title>
            <h1>{data.title}</h1>
            <h1>{data.secondPartTitle}</h1>
            <h2>{data.subtitle}</h2>
         </Title>
      </>
   );
}

const Title = styled.div`
   h2 {
      font-size: 1.3vw;
      margin: 0 0 2rem 0;
   }
   @media ${devices.tablet} {
      h1 {
         font-size: 3vw;
      }
      h2 {
         font-size: 2vw;
      }
   }
   @media ${devices.mobileL} {
      h1 {
         font-size: 3.5vw;
      }
      h2 {
         font-size: 2.5vw;
      }
   }
`;
