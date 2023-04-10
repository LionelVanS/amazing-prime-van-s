import { useLargeCard } from '@/utils/context/largeCard';
import styled from 'styled-components';

export default function Text() {
   const datas = useLargeCard();
   return (
      <TextDiv>
         <p>{datas.text}</p>
      </TextDiv>
   );
}

const TextDiv = styled.div`
   font-size: 1.3vw;
`;
