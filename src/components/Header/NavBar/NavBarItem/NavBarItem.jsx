import styled from 'styled-components';
import { useState } from 'react';
import DropDownMenu from './DropDownMenu/DropDownMenu';
import NavLink from './NavLink/NavLink';
import { devices } from '@/utils/style/breakpoints';

export default function NavBarItem({ link }) {
   const [openLink, setOpenLink] = useState('');

   return (
      <NavItem
         onMouseOver={() => setOpenLink(link.name)}
         onMouseOut={() => setOpenLink('')}
      >
         <NavLink link={link} openLink={openLink} />

         {openLink == link.name ? (
            <DropDownMenu link={link} setOpenLink={setOpenLink} />
         ) : (
            ' '
         )}
      </NavItem>
   );
}

const NavItem = styled.li`
   position: relative;
   height: 4rem;
   font-weight: 500;
   @media ${devices.tablet} {
      height: 2.5rem;
   }
`;
