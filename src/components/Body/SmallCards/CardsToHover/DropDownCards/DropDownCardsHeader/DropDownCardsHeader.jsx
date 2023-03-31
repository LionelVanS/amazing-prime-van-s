// LIBS
import styled from 'styled-components';

// IMPORTED COMPONENTS
import TickIcon from '@/components/Icons/TickIcon';

// EXPORTED COMPONENT
export default function DropDownCardsHeader() {
   return (
      <IncludeDiv>
         <TickIcon />
         <p>Included with me</p>
      </IncludeDiv>
   );
}

// STYLES
const IncludeDiv = styled.div`
   position: absolute;
   top: 0.5vw;
   left: 1.5vw;
   display: flex;
   > svg {
      width: 1vw;
   }
   > p {
      font-size: 0.8vw;
      margin: 0 0 0 0.5vw;
   }
`;
