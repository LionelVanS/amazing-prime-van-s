// LIBS
import styled from 'styled-components';
import Link from 'next/link';
import colors from '@/utils/style/colors';

// REACT HOOKS
import { useRouter } from 'next/router';
import { useState } from 'react';

// IMPORTED COMPONENTS
import ArrowIcon from '../../Icons/ArrowIcon/ArrowIcon';
import DropDownMenu from './DropDownMenu/DropDownMenu';

// EXPORTED COMPONENT
export default function NavBarItem({ link }) {
   const router = useRouter();
   const [openLink, setOpenLink] = useState('');

   return (
      <NavItem
         onMouseOver={() => setOpenLink(link.name)}
         onMouseOut={() => setOpenLink('')}
      >
         <Link
            href={link.path}
            className={router.pathname == link.path ? 'active' : ''}
         >
            {link.name}
            <ArrowIcon />
         </Link>
         {openLink == link.name ? (
            <DropDownMenu link={link} setOpenLink={setOpenLink} />
         ) : (
            ' '
         )}
      </NavItem>
   );
}

// STYLES
const NavItem = styled.li`
   position: relative;
   a {
      height: 4rem;
      padding: 1rem;
      font-size: 20px;
      font-weight: 450;
      color: ${colors.notHoveredText};
      transition: color 150ms linear;
      display: flex;
      :hover {
         color: white;
      }
      svg {
         transition: transform 150ms ease-in-out;
      }
   }
   :hover {
      background-color: #191e25;
      box-shadow: inset 0 -1rem 1rem -1.5rem black;
      svg {
         transform: rotate(180deg);
      }
   }

   .active::after {
      content: '';
      width: 100%;
      height: 0.2rem;
      position: absolute;
      bottom: 0;
      left: 0%;
      background-color: white;
   }
`;
