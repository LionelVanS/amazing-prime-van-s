import styled from 'styled-components';

import { useLargeCard } from '@/utils/context/largeCard';
import { devices } from '@/utils/style/breakpoints';

import TickIcon from '@/components/Icons/TickIcon';

export default function IncludeWithMe() {
   const data = useLargeCard();
   return (
      <AboutMe>
         <TickIcon />
         <p>{data.include || data.header}</p>
      </AboutMe>
   );
}

const AboutMe = styled.div`
   margin-top: 1vw;
   p {
      font-size: 1.2vw;
      font-weight: 700;
      margin-left: 1vw;
   }
   @media ${devices.tablet} {
      p {
         font-size: 1.5vw;
      }
   }
   @media ${devices.mobileL} {
      p {
         font-size: 1.5vw;
      }
      svg {
         width: 2vw;
      }
   }
   @media ${devices.mobileM} {
      p {
         font-size: 3vw;
      }
      svg {
         width: 2.5vw;
      }
   }
`;
