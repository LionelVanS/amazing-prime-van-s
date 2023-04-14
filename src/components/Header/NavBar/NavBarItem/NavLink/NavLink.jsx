import Link from 'next/link';
import { colors } from '@/utils/style/colors';
import { useRouter } from 'next/router';

import ArrowIcon from '../../../../Icons/ArrowIcon';
import styled from 'styled-components';

export default function NavLink({ link, openLink }) {
   // Verifying path to apply .active class if user is on this path
   const router = useRouter();
   const isActive = (pathname) => {
      if (pathname === '/') {
         return router.pathname === '/';
      } else {
         return router.pathname.startsWith(pathname);
      }
   };
   return (
      <NavBarLinkDiv openLink={openLink}>
         <Link href={link.path} className={isActive(link.path) ? 'active' : ''}>
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

      // Conduct when user is travelling in DropDownMenu
      background-color: ${(props) =>
         props.openLink != '' ? colors.lightGreyBackground : ''};
      box-shadow: ${(props) =>
         props.openLink != '' ? 'inset 0 -1rem 3rem -2rem #000}' : ''};
      color: ${colors.text};

      :hover {
         color: white;
      }
      svg {
         transform: ${(props) =>
            props.openLink != '' ? 'rotate(180deg)' : 'rotate(0)'};
         width: 1.2vw;
         height: 1.2vw;
         margin-left: 0.5vw;
         transition: transform 150ms ease-in-out;
      }
   }

   // Class active for link's page who is visited
   .active {
      ::after {
         content: '';
         z-index: 3;
         width: 100%;
         height: 0.2vw;
         position: absolute;
         bottom: 0;
         left: 0;
         background-color: #fff;
      }
   }
`;
