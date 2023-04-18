import styled from 'styled-components';
import { motion } from 'framer-motion';
import { devices } from '../../utils/style/breakpoints';
import { useEffect, useState } from 'react';
import { colors } from '@/utils/style/colors';

import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';
import SearchIcon from '../Icons/SearchIcon';
import ProfilUser from './ProfilUser/ProfilUser';

export default function Header() {
   // LISTENING SCROLL
   const [isScroll, setIsScroll] = useState(false);
   useEffect(() => {
      function handleScroll() {
         if (window.scrollY > 0) {
            setIsScroll(true);
         } else {
            setIsScroll(false);
         }
      }
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

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
      <HeaderPosition>
         <StyledHeader animate={[animation.slide, animation.shadow]}>
            <Logo />
            <NavBar />
            <SearchIcon />
            <ProfilUser />
            <OverlayDiv animate={[animation.slide, animation.opacity]} />
         </StyledHeader>
      </HeaderPosition>
   );
}

// STYLES
const HeaderPosition = styled.div`
   width: 100%;
   height: 3.5vw;
`;

const StyledHeader = styled(motion.header)`
   width: 60vw;
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
`;

const OverlayDiv = styled(motion.div)`
   width: 100%;
   height: inherit;
   position: fixed;
   z-index: -1;
   background-color: ${colors.appBackground};
`;
