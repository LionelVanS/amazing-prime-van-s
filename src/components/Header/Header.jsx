import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { devices, sizes } from '../../utils/style/breakpoints';
import { colors } from '@/utils/style/colors';
import { handleScreenSizeChanges } from '@/utils/functions/handleScreenSize';
import { handleScroll } from '@/utils/functions/handleScroll';

import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';
import SearchIcon from '../Icons/SearchIcon';
import ProfilUser from './ProfilUser/ProfilUser';
import ToggleMenuButton from './Mobile/ToggleMenuButton/ToggleMenuButton';
import SubMenu from './Mobile/SubMenu/SubMenu';

export default function Header() {
   const [isScroll, setIsScroll] = useState(false);
   const [screenWidth, setScreenWidth] = useState();

   useEffect(() => {
      setScreenWidth(window.innerWidth);
      handleScreenSizeChanges(setScreenWidth);

      handleScroll(setIsScroll, screenWidth, sizes);
   }, [screenWidth]);

   // ANIMATIONS
   const animation = {
      slide: {
         top: isScroll ? '1vw' : 0,
         transition: { duration: 0.2 },
      },
      shadow: {
         boxShadow: isScroll
            ? '0px 5px 10px rgba(0, 0, 0, 0.64)'
            : '0 0 0 rgba(0, 0, 0, 0.64)',
         transition: { duration: 0 },
      },
      opacity: {
         opacity: isScroll ? 0 : 1,
         transition: { delay: 0.1, duration: 0.1 },
      },
   };

   return (
      <>
         <HeaderPosition>
            <StyledHeader animate={[animation.slide, animation.shadow]}>
               <ToggleMenuButton />
               <Logo />
               <NavBar />
               <StyledDiv>
                  <SearchIcon />
                  <ProfilUser />
               </StyledDiv>
               <OverlayDiv animate={[animation.slide, animation.opacity]} />
            </StyledHeader>
         </HeaderPosition>
         <SubMenu />
      </>
   );
}

// STYLES
const HeaderPosition = styled.div`
   width: 100%;
   height: 4rem;
   @media ${devices.tablet} {
      height: 2.5rem;
   }
   @media ${devices.mobileL} {
      height: 3rem;
   }
`;

const StyledHeader = styled(motion.header)`
   width: 70vw;
   height: inherit;
   margin: 0 auto;
   z-index: 5;
   display: flex;
   align-items: center;
   justify-content: center;
   position: fixed;
   left: 0;
   right: 0;
   background-color: ${colors.appBackground};
   border-radius: 0.5vw;
   @media ${devices.mobileL} {
      width: 100%;
      justify-content: space-between;
   }
   @media ${devices.tablet} {
      height: 2.5rem;
   }
`;

const StyledDiv = styled.div`
   display: flex;
   align-items: center;
`;
const OverlayDiv = styled(motion.div)`
   width: 100%;
   height: inherit;
   position: fixed;
   z-index: -1;
   background-color: ${colors.appBackground};
   @media ${devices.mobileL} {
      display: none;
   }
`;
