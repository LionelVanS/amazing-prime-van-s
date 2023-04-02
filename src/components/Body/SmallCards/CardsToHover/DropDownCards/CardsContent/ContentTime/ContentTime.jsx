import styled from 'styled-components';

import { colors } from '@/utils/style/colors';

export default function ContentTime({ data }) {
   return (
      <TimeDiv>
         {data.date ? <p>{data.date}</p> : ''}
         {data.duration ? <p>{data.duration}</p> : ' '}
         <span>All</span>
      </TimeDiv>
   );
}

const TimeDiv = styled.div`
   display: flex;
   align-items: baseline;
   p {
      margin: 0.5vw 1vw 0 0;
   }
   span {
      height: 1.3vw;
      line-height: 1.5;
      font-size: 0.8vw;
      font-weight: bold;
      color: #fff;
      background-color: ${colors.spanBackground};
      padding: 0.1vw 0.4vw;
      border-radius: 0.2rem;
   }
`;
