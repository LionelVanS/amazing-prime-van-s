import styled from 'styled-components';
import { useState } from 'react';
import DropDownMenu from './DropDownMenu/DropDownMenu';
import NavLink from './NavLink/NavLink';

export default function NavBarItem({ link }) {
   const [openLink, setOpenLink] = useState('');

   return (
      <NavItem
         onMouseOver={() => setOpenLink(link.name)}
         onMouseOut={() => setOpenLink('')}
      >
         <NavLink link={link} isHoveredLink={openLink} />
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
   height: 3.5vw;
   font-size: 1vw;
   font-weight: 450;
`;
