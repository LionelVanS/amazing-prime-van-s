import styled from 'styled-components';
import { devices } from '@/utils/style/breakpoints';
import { colors } from '@/utils/style/colors';

import Links from './Links/Links';

export default function UserMenu({ links }) {
   return (
      <UserMenuDiv>
         {links &&
            links.map((link, index) => (
               <InfoDiv key={index}>
                  <Links links={link} />
               </InfoDiv>
            ))}
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
