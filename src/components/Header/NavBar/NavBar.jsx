import styled from 'styled-components';
import links from '../../../utils/data/header/links';
import NavBarItem from './NavBarItem/NavBarItem';

export default function NavBar() {
   return (
      <Nav>
         <ul>
            {links.map((link, index) => (
               <NavBarItem key={index} link={link} />
            ))}
         </ul>
      </Nav>
   );
}

const Nav = styled.nav`
   ul {
      display: flex;
      align-items: center;
   }
`;
