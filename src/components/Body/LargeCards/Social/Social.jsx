import styled from 'styled-components';
import { useState } from 'react';

import SocialLink from './SocialLink/SocialLink';
import LinkDescription from './LinkDescription/LinkDescription';
import { useLargeCard } from '@/utils/context/largeCard';
import { devices } from '@/utils/style/breakpoints';

export default function Social() {
   // Contains socialLinks.name of hovered icon
   const [isHovered, setIsHovered] = useState();

   const data = useLargeCard();
   const links = data.links;

   return (
      <>
         <SocialDiv>
            <ul>
               {links.map((link, index) => (
                  <li
                     key={index}
                     onMouseOver={() => setIsHovered(link.name)}
                     onMouseLeave={() => setIsHovered()}
                  >
                     <SocialLink link={link} />
                     {
                        // Display name of link on hover
                        isHovered == link.name && (
                           <LinkDescription name={link.name} />
                        )
                     }
                  </li>
               ))}
            </ul>
         </SocialDiv>
      </>
   );
}

const SocialDiv = styled.div`
   align-items: center;
   margin-left: 3vw;
   li {
      position: relative;
      margin-left: 1vw;
      display: flex;
      justify-content: center;
   }
`;
