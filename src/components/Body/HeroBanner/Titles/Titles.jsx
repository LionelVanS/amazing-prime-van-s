import { useHeroBanner } from '@/utils/context/heroBanner';
import styled from 'styled-components';

export default function Titles() {
   const datas = useHeroBanner();
   return (
      <>
         <Title>
            <h1>{datas.title}</h1>
            <h1>{datas.secondPartTitle}</h1>
            <h2>{datas.subtitle}</h2>
         </Title>
      </>
   );
}

const Title = styled.div`
   h2 {
      font-size: 1.3vw;
      margin: 0 0 2rem 0;
   }
`;
