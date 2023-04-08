import styled from 'styled-components';

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

const links = [
   // HOMEPAGE
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

   // CAREER PAGE
   {
      name: 'Parcours',
      path: '/career',
      subNav: [
         {
            name: 'Expériences',
            path: '/career#experiences',
         },
         {
            name: 'Formations',
            path: '/career#formations',
         },
      ],
   },

   // SKILLS PAGE
   {
      name: 'Compétences',
      path: '/skills',
      subNav: [
         {
            name: 'Techniques',
            path: '/skills#Techniques',
         },
         {
            name: 'Transversales',
            path: '/skills#Transversales',
         },
         {
            name: 'Soft Skills',
            path: '/skills#Soft Skills',
         },
      ],
   },

   // PORTFOLIO PAGE
   {
      name: 'Portfolio',
      path: '/portfolio',
   },
];
