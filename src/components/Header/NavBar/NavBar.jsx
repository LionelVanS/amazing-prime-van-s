// LIBS
import styled from 'styled-components';

// LINKS
import { navLinks } from '@/utils/data/NavLinks';

// IMPORTED COMPONENTS
import NavBarItem from './NavBarItem/NavBarItem';

// EXPORTED COMPONENT
export default function NavBar() {
   return (
      <Nav>
         <ul>
            {navLinks.map((link, index) => (
               <NavBarItem key={index} link={link} />
            ))}
         </ul>
      </Nav>
   );
}

// STYLES
const Nav = styled.nav`
   ul {
      display: flex;
      align-items: center;
   }
`;
