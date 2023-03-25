// LIBS
import styled from 'styled-components';

// UTILS
import { colors } from '@/utils/style/colors';

// IMPORTED COMPONENT
import TickIcon from '../../Icons/TickIcon';

// EXPORTED COMPONENT
export default function AboutTech({ technologies }) {
   return (
      <IncludeDiv>
         <TickIcon />
         <p>
            {technologies}
            <span>Et +</span>
         </p>
      </IncludeDiv>
   );
}

// STYLES
const IncludeDiv = styled.div`
   display: flex;
   > svg {
      width: 1.5vw;
   }
   p {
      font-size: 1vw;
      margin-left: 1rem;
      font-weight: bold;
   }
   span {
      margin-left: 1vw;
      background-color: ${colors.spanBackground};
      border-radius: 0.3rem;
      padding: 0 0.2rem;
   }
`;
