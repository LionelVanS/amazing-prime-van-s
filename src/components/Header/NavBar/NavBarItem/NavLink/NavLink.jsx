import Link from 'next/link';
import { colors } from '@/utils/style/colors';
import { useRouter } from 'next/router';

import ArrowIcon from '../../../../Icons/ArrowIcon';
import styled from 'styled-components';

export default function NavLink({ link, isHoveredLink }) {
   const router = useRouter();
   return (
      <NavBarLinkDiv isHoveredLink={isHoveredLink}>
         <Link
            href={link.path}
            className={router.pathname == link.path ? 'active' : ''}
         >
            {link.name}
            <ArrowIcon />
         </Link>
      </NavBarLinkDiv>
   );
}

const NavBarLinkDiv = styled.div`
   height: 100%;
   line-height: 1px;
   > a {
      height: inherit;
      padding: 0 1vw;
      display: flex;
      align-items: center;
      transition: color 150ms linear;

      // Conduct when user is travelling through DropDownMenu
      background-color: ${(props) =>
         props.isHoveredLink != '' ? colors.lightGreyBackground : ''};
      box-shadow: ${(props) =>
         props.isHoveredLink != '' ? 'inset 0 -1rem 3rem -2rem #000}' : ''};

      :hover {
         color: white;
      }
      color: ${(props) =>
         props.isHoveredLink != '' ? colors.text : colors.text};
      svg {
         transform: ${(props) =>
            props.isHoveredLink != '' ? 'rotate(180deg)' : 'rotate(0)'};
         width: 1.2vw;
         height: 1.2vw;
         margin-left: 0.5vw;
         transition: transform 150ms ease-in-out;
      }
   }

   .active {
      /* color: #fff; */
      ::after {
         content: '';
         z-index: 3;
         width: 100%;
         height: 0.2vw;
         position: absolute;
         bottom: 0;
         left: 0;
         /* background-color: #fff; */
      }
   }
`;
