// LIBS
import styled from 'styled-components';

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

// LINKS
const navLinks = [
   {
      name: 'Accueil',
      path: '/',
      subNav: [
         {
            name: 'Profil',
            path: '/profil',
         },
      ],
   },
   {
      name: 'Parcours',
      path: '/career',
      subNav: [
         {
            name: 'Expériences',
            path: '/career',
         },
         {
            name: 'Formations',
            path: '/career',
         },
      ],
   },
   {
      name: 'Compétences',
      path: '/skills',
      subNav: [
         {
            name: 'Techniques',
            path: '/skills',
         },
         {
            name: 'Transversales',
            path: '/skills',
         },
      ],
   },
   {
      name: 'Portfolio',
      path: '/portfolio',
   },
];
