// LIBS
import { colors } from '@/utils/style/colors';
import styled from 'styled-components';

// EXPORTED COMPONENT
export default function DotIcon() {
   return (
      <IconDiv>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
         >
            <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
         </svg>
      </IconDiv>
   );
}

const IconDiv = styled.div`
   padding: 0.3vw;
   background-color: ${colors.spanBackground};
   border-radius: 50%;
   svg {
      width: 1.2vw;
      height: 1.2vw;
   }
`;
