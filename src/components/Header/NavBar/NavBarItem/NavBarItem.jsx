import styled from 'styled-components';

import { colors } from '@/utils/style/colors';

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
         <NavLink link={link} />
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
   margin-bottom: 0;
   a {
      height: 3.5vw;
      padding: 1rem;
      font-size: 1vw;
      font-weight: 450;
      color: ${colors.text};
      transition: color 150ms linear;
      display: flex;
      align-items: center;
      line-height: 1px;
      :hover {
         color: white;
      }
      svg {
         width: 1vw;
         transition: transform 150ms ease-in-out;
      }
   }
   :hover {
      background-color: ${colors.lightGreyBackground};
      box-shadow: inset 0 -1rem 1rem -1.5rem black;
      svg {
         transform: rotate(180deg);
      }
   }

   .active::after {
      content: '';
      z-index: 3;
      width: 100%;
      height: 0.2vw;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: white;
   }
`;
