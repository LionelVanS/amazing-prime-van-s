import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { colors } from '@/utils/style/colors';
import { getActiveLink } from '@/utils/functions/getActiveLink';

import ArrowIcon from '../../../../Icons/ArrowIcon';

export default function NavLink({ link, openLink }) {
   // Verifying path to apply .active class if user is on this path
   const router = useRouter();

   // Verify on which route user is
   const activeLink = getActiveLink(router, link.path);

   const AnimateLink = motion(Link);

   const hover = {
      background: {
         backgroundColor: openLink
            ? colors.lightGreyBackground
            : colors.appBackground,
         transition: { duration: 0 },
      },
      shadow: {
         boxShadow: 'inset 0 -1rem 3rem -2rem #000',
      },
      rotate: {
         initial: { transform: 'rotate(0deg)' },
         transform: openLink ? 'rotate(180deg)' : '',
         // transition: { duration: 0.15 },
      },
   };

   return (
      <NavBarLinkDiv animate={[hover.background, hover.shadow]}>
         <AnimateLink
            href={link.path}
            className={activeLink ? 'active' : ''}
            style={{ color: openLink ? '#fff' : colors.text }}
         >
            {link.name}
            <motion.svg animate={hover.rotate} transition={{ duration: 0.15 }}>
               <ArrowIcon />
            </motion.svg>
         </AnimateLink>
      </NavBarLinkDiv>
   );
}

const NavBarLinkDiv = styled(motion.div)`
   height: 100%;
   line-height: 1px;
   > a {
      height: inherit;
      padding: 0 1vw;
      display: flex;
      align-items: center;
      svg {
         width: 1.2vw;
         height: 1.2vw;
         margin-left: 0.5vw;
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
