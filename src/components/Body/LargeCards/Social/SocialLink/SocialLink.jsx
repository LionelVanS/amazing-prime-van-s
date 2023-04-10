import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '@/utils/style/colors';

export default function SocialLink({ link }) {
   return (
      <LinkDiv>
         <Link href={link.url} target="_blank" rel="noopener noreferrer">
            {link.icon}
         </Link>
      </LinkDiv>
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
   }
   :hover {
      background-color: #fff;
      transform: scale(1.1);
      svg {
         fill: #000;
      }
   }
`;
