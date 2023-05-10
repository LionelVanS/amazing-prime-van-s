import links from '@/utils/data/header/links';
import { getActiveLink } from '@/utils/functions/getActiveLink';
import { devices } from '@/utils/style/breakpoints';
import { colors } from '@/utils/style/colors';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function SubMenu() {
   const router = useRouter();

   const [currentLink, setCurrentLink] = useState();

   useEffect(() => {
      const currentPage = router.pathname;
      setCurrentLink(links.find((link) => currentPage.startsWith(link.path)));
   }, [router.pathname]);

   return (
      <StyledMenu>
         <nav>
            <ul>
               {currentLink &&
                  currentLink.subNav?.map((link, index) => (
                     <Link href={link.path} key={index}>
                        <li>{link.name}</li>
                     </Link>
                  ))}
            </ul>
         </nav>
      </StyledMenu>
   );
}

const StyledMenu = styled.nav`
   background: linear-gradient(
      to bottom,
      ${colors.appBackground} 35%,
      transparent
   );
   z-index: 2;
   position: fixed;
   left: 0;
   right: 0;
   ul {
      display: flex;
      gap: 2rem;
      margin: 1rem 0 0 2.5rem;
      a {
         color: ${colors.text};
      }
   }

   @media ${devices.tablet}, ${devices.desktop} {
      display: none;
   }
`;
