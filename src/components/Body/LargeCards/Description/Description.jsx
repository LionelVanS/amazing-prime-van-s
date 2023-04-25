import styled from 'styled-components';
import TickIcon from '@/components/Icons/TickIcon';
import { useLargeCard } from '@/utils/context/largeCard';

export default function IncludeWithMe() {
   const data = useLargeCard();
   return (
      <AboutMe>
         <TickIcon />
         <p>{data.header}</p>
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
`;
