import styled from 'styled-components';

import { colors } from '@/utils/style/colors';

import ContactInfo from './ContactInfo/ContactInfo';
import SocialMedia from './SocialMedia/SocialMedia';
import { devices } from '@/utils/style/breakpoints';

export default function UserMenu() {
   return (
      <UserMenuDiv>
         <InfoDiv>
            <SocialMedia />
         </InfoDiv>

         <InfoDiv>
            <ContactInfo />
         </InfoDiv>
      </UserMenuDiv>
   );
}

const UserMenuDiv = styled.div`
   position: absolute;
   padding: 1vw;
   top: 4rem;
   right: 0;
   background-color: ${colors.lightGreyBackground};
   border-radius: 0 0 0.5vw 0.5vw;
   display: flex;
   z-index: 2;
   @media ${devices.tablet} {
      top: 2.5rem;
   }
`;

const InfoDiv = styled.div`
   display: flex;
   flex-flow: column;
   padding: 0 1vw;
   font-size: 1vw;
   p {
      font-weight: 500;
      margin: 0.5vw 1vw 1vw 0.5vw;
   }
   a {
      color: ${colors.text};
      padding: 0.5vw 1.5vw;
      border-radius: 0.5vw;
      :hover {
         background-color: white;
         color: black;
      }
   }
`;
