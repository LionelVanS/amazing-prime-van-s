import Link from 'next/link';
import { colors } from '@/utils/style/colors';

import { useRouter } from 'next/router';

import ArrowIcon from '../../../../Icons/ArrowIcon';
import styled from 'styled-components';

export default function NavLink({ link }) {
   const router = useRouter();
   return (
      <NavBarLinkDiv>
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
   a {
      height: inherit;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      color: ${colors.text};
      transition: color 150ms linear;
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

   .active {
      color: #fff;
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
