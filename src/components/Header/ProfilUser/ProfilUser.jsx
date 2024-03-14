import Image from 'next/image';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { handleScreenSizeChanges } from '@/utils/functions/handleScreenSize';
import { colors } from '@/utils/style/colors';
import { devices, sizes } from '@/utils/style/breakpoints';
import socialLinks from '@/utils/data/header/profilUser/socialLinks';
import contactLinks from '@/utils/data/header/profilUser/contactLinks';

import UserMenu from './UserMenu/UserMenu';
import OverlayMenu from '../Mobile/OverlayMenu/OverlayMenu';
import { handleUserMenuEvent } from '@/utils/functions/handleUserMenuEvent';

export default function ProfilUser() {
   const [userMenuIsHovered, setUserMenuIsHovered] = useState(false);
   const [userMenuIsClicked, setUserMenuIsClicked] = useState(false);
   const [screenWidth, setScreenWidth] = useState();

   useEffect(() => {
      setScreenWidth(window.innerWidth);
      handleScreenSizeChanges(setScreenWidth);
   }, []);

   const userMenuProps = {
      screenWidth,
      sizes,
      setUserMenuIsHovered,
      setUserMenuIsClicked,
      userMenuIsClicked,
      userMenuIsHovered,
   };

   const links = [
      { type: 'Réseaux', data: socialLinks },
      { type: 'Contact', data: contactLinks },
   ];

   return (
      <ProfilDiv
         onMouseEnter={(e) => handleUserMenuEvent(e, userMenuProps)}
         onMouseLeave={(e) => handleUserMenuEvent(e, userMenuProps)}
         onClick={(e) => handleUserMenuEvent(e, userMenuProps)}
         userMenuIsClicked={userMenuIsClicked}
         userMenuIsHovered={userMenuIsHovered}
      >
         <p>Lionel</p>
         <Image
            src="/images/profil-picture.jpg"
            alt="Image de profil"
            width="40"
            height="40"
         />

         {userMenuIsHovered && <UserMenu links={links} />}

         {userMenuIsClicked && (
            <OverlayMenu links={links} parent="profilUser" />
         )}
      </ProfilDiv>
   );
}

const ProfilDiv = styled.div`
   height: 4rem;
   display: flex;
   align-items: center;
   cursor: pointer;
   position: relative;
   background-color: ${(props) =>
      props.userMenuIsHovered ? colors.lightGreyBackground : ''};
   box-shadow: inset 0 -1rem 1rem -1.5rem black;

   > p {
      font-size: 1vw;
      font-weight: 500;
      margin: 0;
      padding-left: 1vw;
      color: ${colors.text};
   }
   > img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      margin: 0 1vw;
      @media ${devices.tablet} {
         width: 2rem;
         height: 2rem;
      }
      @media ${devices.mobileL} {
         width: 1.5rem;
         height: 1.5rem;
         margin: 0 auto;
      }
   }
   @media ${devices.mobileL} {
      width: 5rem;
      height: 3rem;
      background-color: ${(props) =>
         props.userMenuIsClicked ? colors.lightGreyBackground : ''};
   }
   @media ${devices.tablet} {
      height: 2.5rem;
   }

   @media ${devices.tablet}, ${devices.mobileL} {
      > p {
         display: none;
      }
   }
`;
