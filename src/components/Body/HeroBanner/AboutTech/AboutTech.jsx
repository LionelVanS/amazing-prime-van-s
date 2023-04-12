import styled from 'styled-components';
import { colors } from '@/utils/style/colors';
import TickIcon from '../../../Icons/TickIcon';
import { useHeroBanner } from '@/utils/context/heroBanner';

export default function AboutTech() {
   const datas = useHeroBanner();
   return (
      <IncludeDiv>
         <TickIcon />
         <p>
            {datas.infos}
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
`;
