import Link from 'next/link';
import styled from 'styled-components';

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
   }
   :hover {
      background-color: white;
      a {
         color: black;
      }
   }
`;
