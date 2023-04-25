import { useLargeCard } from '@/utils/context/largeCard';
import styled from 'styled-components';

export default function Text() {
   const datas = useLargeCard();
   const text = datas.text;

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
   }
`;
