import styled from 'styled-components';

import TickIcon from '@/components/Icons/TickIcon';

export default function CardsHeader({ data }) {
   return (
      <HeaderDiv>
         <TickIcon />
         <p>{data.header}</p>
      </HeaderDiv>
   );
}

const HeaderDiv = styled.div`
   display: flex;
   > svg {
      width: 1vw;
   }
   > p {
      font-size: 0.8vw;
      margin: 0 0 0 0.5vw;
   }
`;
