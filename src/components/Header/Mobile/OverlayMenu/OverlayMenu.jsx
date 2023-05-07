import { colors } from '@/utils/style/colors';
import styled from 'styled-components';
import NavBarMobile from '../NavBarMobile/NavBarMobile';
import SocialMedia from '../../ProfilUser/UserMenu/SocialMedia/SocialMedia';
import ContactInfo from '../../ProfilUser/UserMenu/ContactInfo/ContactInfo';
import { useEffect, useState } from 'react';

export default function OverlayMenu({
   links,
   socialLinks,
   contactLinks,
   parent,
}) {
   const [showMenu, setShowMenu] = useState(false);
   const [showProfil, setShowProfil] = useState(false);

   useEffect(() => {
      if (parent == 'toggleMenuButton') {
         setShowMenu(true);
         setShowProfil(false);
      } else if (parent == 'profilUser') {
         setShowProfil(true);
         setShowMenu(false);
      } else {
         setShowProfil(false);
         setShowMenu(false);
      }
   }, [parent]);

   if (showMenu && !showProfil) {
      return (
         <StyledMenuDiv>
            <NavBarMobile links={links} />
         </StyledMenuDiv>
      );
   }
   if (showProfil && !showMenu) {
      return (
         <StyledMenuDiv>
            <InfoDiv>
               <SocialMedia socialLinks={socialLinks} />
            </InfoDiv>
            <InfoDiv>
               <ContactInfo contactLinks={contactLinks} />
            </InfoDiv>
         </StyledMenuDiv>
      );
   } else {
      return null;
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
