import styled from 'styled-components';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { colors } from '@/utils/style/colors';
import { getActiveLink } from '@/utils/functions/getActiveLink';

import ArrowIcon from '../../../../Icons/ArrowIcon';
import { devices } from '@/utils/style/breakpoints';

export default function NavLink({ link, openLink }) {
   // Verifying path to apply .active class if user is on this path
   const router = useRouter();

   // Verify on which route user is
   const [activeLink, setActiveLink] = useState(false);

   useEffect(() => {
      setActiveLink(getActiveLink(router, link.path));
   }, [router.pathname]);

   return (
      <NavLinkDiv openLink={openLink}>
         <Link
            href={link.path}
            className={activeLink ? 'active' : ''}
            openlink={openLink}
            scroll={false}
         >
            {link.name}
            <ArrowIcon openLink={openLink} />
         </Link>
      </NavLinkDiv>
   );
}

const NavLinkDiv = styled.div`
   height: 100%;
   line-height: 1px;
   background-color: ${(props) =>
      props.openLink ? colors.lightGreyBackground : ''};
   box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.5);
   a {
      height: inherit;
      font-size: 1.2rem;
      font-weight: 400;
      padding: 0 1vw;
      display: flex;
      align-items: center;
      transition: all 200ms ease;
      color: ${colors.text};
      :hover {
         color: #fff;
      }
   }

   @media ${devices.tablet} {
      a {
         font-size: 1rem;
      }
   }

   // Class active for link's page which user is
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
