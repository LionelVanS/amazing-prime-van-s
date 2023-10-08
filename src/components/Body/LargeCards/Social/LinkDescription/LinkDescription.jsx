import styled from 'styled-components';
import { colors } from '@/utils/style/colors';

export default function LinkDescription({ name }) {
   return (
      <LinkDescriptionDiv>
         <p>{name}</p>
      </LinkDescriptionDiv>
   );
}

const LinkDescriptionDiv = styled.div`
   position: absolute;
   top: 4vw;
   background-color: ${colors.spanBackground};
   padding: 0.5vw;
   border-radius: 0.8vw;
   p {
      font-size: 1vw;
      text-align: center;
      margin: 0;
   }
`;
