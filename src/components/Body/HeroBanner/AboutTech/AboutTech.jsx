import styled from 'styled-components';
import { colors } from '@/utils/style/colors';
import TickIcon from '../../../Icons/TickIcon';
import { useHeroBanner } from '@/utils/context/heroBanner';
import { devices } from '@/utils/style/breakpoints';

export default function AboutTech() {
   const data = useHeroBanner();
   return (
      <IncludeDiv>
         <TickIcon />
         <p>
            {data.infos}
            <span>Et +</span>
         </p>
      </IncludeDiv>
   );
}

const IncludeDiv = styled.div`
   display: flex;
   p {
      font-size: 1vw;
      margin-left: 1rem;
      font-weight: 700;
   }
   span {
      margin-left: 1vw;
      background-color: ${colors.spanBackground};
      border-radius: 0.5rem;
      padding: 0.05vw 0.3vw;
   }
   @media ${devices.mobileL} {
      p {
         font-size: 2vw;
      }
      svg {
         width: 2.5vw;
      }
   }

   @media ${devices.tablet} {
      p {
         font-size: 1.5vw;
      }
      svg {
         width: 2vw;
      }
   }
`;
