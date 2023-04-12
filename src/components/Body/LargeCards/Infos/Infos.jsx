import { useLargeCard } from '@/utils/context/largeCard';
import { colors } from '@/utils/style/colors';
import styled from 'styled-components';

export default function Infos() {
   const datas = useLargeCard();
   const profilInfos = datas.infos;
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
   }
`;
