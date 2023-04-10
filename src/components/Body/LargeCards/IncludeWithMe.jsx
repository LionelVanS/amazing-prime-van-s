import styled from 'styled-components';
import TickIcon from '@/components/Icons/TickIcon';

export default function IncludeWithMe() {
   return (
      <AboutMe>
         <TickIcon />
         <p> Inclus avec Moi</p>
      </AboutMe>
   );
}

const AboutMe = styled.div`
   margin-top: 1vw;
   p {
      font-size: 1.2vw;
      font-weight: bold;
      margin-left: 1vw;
   }
`;
