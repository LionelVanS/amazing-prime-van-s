import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '@/utils/style/colors';

export default function NavBarMobile({ links }) {
   return (
      <nav>
         <ul>
            {links.map((link, index) => (
               <Link key={index} href={link.path}>
                  <StyledLi>
                     {link.icon}
                     <p>{link.name}</p>
                  </StyledLi>
               </Link>
            ))}
         </ul>
      </nav>
   );
}

const StyledLi = styled.li`
   display: flex;
   align-items: center;
   p {
      font-size: 1rem;
      margin-left: 0.5rem;
      color: ${colors.text};
   }
   svg {
      color: ${colors.text};
      width: 1rem;
   }
`;
