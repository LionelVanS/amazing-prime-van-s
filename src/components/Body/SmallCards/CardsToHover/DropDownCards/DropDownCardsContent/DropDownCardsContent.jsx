// LIBS
import styled from 'styled-components';

// UTILS
import { colors } from '@/utils/style/colors';
import ContentTime from './ContentTime/ContentTime';

// EXPORTED COMPONENT
export default function DropDownCardsContent({ data }) {
   return (
      <ContentDiv>
         <h3> {data.title} </h3>
         <ContentTime data={data} />
         <p> {data.text} </p>
      </ContentDiv>
   );
}

// STYLES
const ContentDiv = styled.div`
   position: absolute;
   top: 5vw;
   right: 1.5vw;
   left: 1.5vw;
   display: flex;
   flex-flow: column;
   h3 {
      color: #fff;
      font-size: 1vw;
      margin: 0;
   }
   p {
      font-size: 0.8vw;
      color: ${colors.text};
   }
`;
