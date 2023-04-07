import styled from 'styled-components';

import { colors } from '@/utils/style/colors';
import ContentTime from './ContentTime/ContentTime';

export default function DropDownCardsContent({ data }) {
   return (
      <ContentDiv>
         <h3> {data.title} </h3>
         <ContentTime data={data} />
         <p> {data.text} </p>
      </ContentDiv>
   );
}

const ContentDiv = styled.div`
   display: flex;
   flex-flow: column;
   margin-top: 0.5vw;
   h3 {
      font-size: 1vw;
      margin: 0;
   }
   p {
      font-size: 0.8vw;
      color: ${colors.text};
   }
`;
