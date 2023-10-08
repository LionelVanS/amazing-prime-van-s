import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { colors } from '@/utils/style/colors';
import { handleClick } from '@/utils/functions/handleClick';
import { devices } from '@/utils/style/breakpoints';

export default function SocialLink({ link }) {
   const router = useRouter();
   return (
      <Link href={link.link} onClick={(e) => handleClick(e, router, link)}>
         <LinkDiv>{link.icon}</LinkDiv>
      </Link>
   );
}

const LinkDiv = styled.div`
   width: 3vw;
   height: 3vw;
   display: flex;
   justify-content: center;
   border-radius: 50%;
   background-color: ${colors.spanBackground};
   transition: transform 150ms ease-in;
   svg {
      width: 1.5vw;
      fill: #fff;
      @media ${devices.tablet} {
      }
      @media ${devices.mobileL} {
         width: 3vw;
      }
      @media ${devices.mobileM} {
         width: 5vw;
      }
   }
   :hover {
      background-color: #fff;
      transform: scale(1.1);
      svg {
         fill: #000;
      }
   }

   @media ${devices.mobileL} {
      width: 4vw;
      height: 4vw;
   }
   @media ${devices.mobileM} {
      width: 7vw;
      height: 7vw;
   }
`;
