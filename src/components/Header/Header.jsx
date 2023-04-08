import styled from 'styled-components';
import { motion } from 'framer-motion';
import { devices } from '../../utils/style/breakpoints';

import NavBar from './NavBar/NavBar';
import SearchIcon from '../Icons/SearchIcon';
import ProfilUser from './ProfilUser/ProfilUser';
import Logo from './Logo/Logo';
import { useEffect, useState } from 'react';
import { colors } from '@/utils/style/colors';

export default function Header() {
   const [isScroll, setIsScroll] = useState(false);

   // Listening to the scroll to determinate where header should be
   useEffect(() => {
      function handleScroll() {
         if (window.scrollY >= 1) {
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

   // Slide animation from the top when scrolling down
   const slideAnimation = {
      top: isScroll ? '1vw' : '0',
   };

   // Box shadow appearance when scrolling down
   const boxShadow = {
      boxShadow: isScroll ? '0px 5px 10px rgba(0, 0, 0, 0.64)' : '',
   };

   // Background disappearance when scrolling down
   const backgroundOpacity = {
      display: isScroll ? 'none' : 'block',
      transition: { duration: '1s' },
   };

   return (
      <HeaderPosition>
         <StyledHeader animate={[slideAnimation, boxShadow]}>
            {/* <Overlay animate={[slideAnimation]}></Overlay> */}
            <Logo />
            <NavBar />
            <SearchIcon />
            <ProfilUser />
         </StyledHeader>
      </HeaderPosition>
   );
}

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

const HeaderPosition = styled.div`
   width: 100%;
   height: 3.5vw;
`;

const Overlay = styled(motion.div)`
   width: 100%;
   height: inherit;
   position: fixed;
   /* background-color: ${colors.appBackground}; */
`;
