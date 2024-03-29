import styled from 'styled-components';

import { colors } from '@/utils/style/colors';

export default function ContentTime({ data }) {
   return (
      <TimeDiv>
         <p>{data.date}</p>
         <p>{data.duration}</p>
         <span>{data.reason || data.job}</span>
      </TimeDiv>
   );
}

const TimeDiv = styled.div`
   display: flex;
   align-items: baseline;
   p {
      margin: 0.5vw 0.5vw 0 0;
   }
   span {
      height: 1.3vw;
      line-height: 1.5;
      font-size: 0.8vw;
      font-weight: 700;
      color: #fff;
      background-color: ${colors.spanBackground};
      padding: 0.1vw 0.4vw;
      border-radius: 0.2rem;
   }
`;
