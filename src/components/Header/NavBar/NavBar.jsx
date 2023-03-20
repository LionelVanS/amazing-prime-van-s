import styled from 'styled-components';

// IMPORTED COMPONENTS
import NavBarItem from './NavBarItem/NavBarItem';

// EXPORTED COMPONENT
export default function NavBar() {
   return (
      <Nav>
         <ul>
            {NavLinks.map((link, index) => (
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
const NavLinks = [
   {
      name: 'Accueil',
      path: '/',
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
      name: 'Portfolios',
      path: '/portfolios',
      subNav: [
         {
            name: 'Développement',
            path: '/portfolios',
         },
         {
            name: 'Photo',
            path: '/portfolios',
         },
      ],
   },
];
