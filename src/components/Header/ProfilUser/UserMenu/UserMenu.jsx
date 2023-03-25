// LIBS
import styled from 'styled-components';

// UTILS
import { colors } from '@/utils/style/colors';
import { mediaLinks, infoLink } from '@/utils/data/profilLinks.js';

// IMPORTED COMPONENTS
import ContactInfo from './ContactInfo/ContactInfo';
import SocialMedia from './SocialMedia/SocialMedia';

// EXPORTED COMPONENT
export default function UserMenu() {
   return (
      <UserMenuDiv>
         <InfoDiv>
            <SocialMedia mediaLinks={mediaLinks} />
         </InfoDiv>

         <InfoDiv>
            <ContactInfo infoLink={infoLink} />
         </InfoDiv>
      </UserMenuDiv>
   );
}

// STYLES
const UserMenuDiv = styled.div`
   position: absolute;
   padding: 1rem;
   top: 3.5vw;
   right: 0;
   background-color: ${colors.hoveredText};
   border-radius: 0 0 0.5rem 0.5rem;
   display: flex;
   justify-content: space-between;
   z-index: 2;
`;

const InfoDiv = styled.div`
   display: flex;
   flex-flow: column;
   padding: 0 1rem;
   p {
      font-size: 1vw;
      font-weight: bold;
      margin: 0.5rem 1rem 1rem 0.5rem;
   }
   a {
      font-size: 1vw;
      color: ${colors.text};
      text-align: center;
      padding: 0.5rem 1.5rem;
      border-radius: 0.5rem;
      :hover {
         background-color: white;
         color: black;
      }
   }
`;
