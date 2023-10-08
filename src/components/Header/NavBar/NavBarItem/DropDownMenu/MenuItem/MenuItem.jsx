import Link from 'next/link';
import styled from 'styled-components';
import { devices } from '@/utils/style/breakpoints';
import { colors } from '@/utils/style/colors';

export default function MenuItem({ link, setOpenLink }) {
   return (
      <LinkLi>
         <Link href={link.path} onClick={() => setOpenLink('')}>
            {link.name}
         </Link>
      </LinkLi>
   );
}

const LinkLi = styled.li`
   width: 100%;
   height: 3.5vw;
   a {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: none;
      width: inherit;
      height: inherit;
      color: ${colors.text};
   }
   :hover {
      background-color: white;
      a {
         color: black;
      }
   }
   @media ${devices.tablet} {
      font-size: 0.8rem;
   }
`;
