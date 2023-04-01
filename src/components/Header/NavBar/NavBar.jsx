import styled from 'styled-components';

import NavBarItem from './NavBarItem/NavBarItem';

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

const Nav = styled.nav`
   ul {
      display: flex;
      align-items: center;
   }
`;

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
            path: '/skills#technical-skills',
         },
         {
            name: 'Transversales',
            path: '/skills#transferable-skills',
         },
         {
            name: 'Soft Skills',
            path: '/skills#soft-skills',
         },
      ],
   },
   {
      name: 'Portfolio',
      path: '/portfolio',
   },
];
