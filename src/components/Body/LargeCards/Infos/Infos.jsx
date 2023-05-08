import styled from 'styled-components';

import { useLargeCard } from '@/utils/context/largeCard';
import { devices } from '@/utils/style/breakpoints';
import { colors } from '@/utils/style/colors';

export default function Infos() {
   const data = useLargeCard();
   const profilInfos = data.infos;
   return (
      <InfoDiv>
         <ul>
            {profilInfos.map((info, index) => (
               <li key={index}>
                  <p>{info.data}</p>
               </li>
            ))}
         </ul>
      </InfoDiv>
   );
}

const InfoDiv = styled.div`
   p {
      font-size: 1vw;
      font-weight: 500;
      margin-right: 1.5vw;
      color: ${colors.text};
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
