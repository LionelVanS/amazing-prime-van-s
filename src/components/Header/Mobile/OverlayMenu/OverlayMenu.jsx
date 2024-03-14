import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { colors } from '@/utils/style/colors';

import NavBarMobile from '../NavBarMobile/NavBarMobile';
import Links from '../../ProfilUser/UserMenu/Links/Links';

export default function OverlayMenu({ links, parent }) {
   const [showMenu, setShowMenu] = useState(false);
   const [showProfil, setShowProfil] = useState(false);

   useEffect(() => {
      switch (parent) {
         case '':
            break;
         case 'menu':
            setShowProfil(false);
            setShowMenu(true);
            break;
         case 'profilUser':
            setShowProfil(true);
            setShowMenu(false);
            break;
         default:
            setShowProfil(false);
            setShowMenu(false);
      }
   }, [parent]);

   if (showMenu) {
      return (
         <StyledMenuDiv>
            <NavBarMobile links={links} />
         </StyledMenuDiv>
      );
   }

   if (showProfil) {
      return (
         <StyledMenuDiv>
            {links &&
               links.map((link, index) => (
                  <InfoDiv key={index}>
                     <Links links={link} />
                  </InfoDiv>
               ))}
         </StyledMenuDiv>
      );
   }
}

const StyledMenuDiv = styled.div`
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   top: 3rem;
   padding-left: 2rem;
   background-color: ${colors.lightGreyBackground};
`;

const InfoDiv = styled.div`
   display: flex;
   flex-flow: column;
   p {
      margin-bottom: 0;
      margin-left: -1rem;
      font-weight: 700;
   }
   a {
      color: ${colors.text};
      margin-top: 2rem;
      :nth-child(4) {
         margin-bottom: 1rem;
      }
   }
`;
