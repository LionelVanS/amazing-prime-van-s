// LIBS
import { colors } from '@/utils/style/colors';
import styled from 'styled-components';

// EXPORTED COMPONENT
export default function PLusIcon() {
   return (
      <>
         <IconDiv>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               stroke="#fff"
               fill="#fff"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
         </IconDiv>
      </>
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
