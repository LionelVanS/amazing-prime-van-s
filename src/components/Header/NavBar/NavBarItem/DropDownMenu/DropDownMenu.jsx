import styled from 'styled-components';

import { colors } from '@/utils/style/colors';
import MenuItem from './MenuItem/MenuItem';
import { devices } from '@/utils/style/breakpoints';

export default function DropDownMenu({ link, setOpenLink }) {
   const subMenuLinks = link.subNav;

   return (
      <>
         <DropDownMenuDiv>
            <ul>
               {subMenuLinks &&
                  subMenuLinks.map((link, index) => (
                     <MenuItem
                        key={index}
                        link={link}
                        setOpenLink={setOpenLink}
                     />
                  ))}
            </ul>
         </DropDownMenuDiv>
      </>
   );
}

const DropDownMenuDiv = styled.div`
   background-color: ${colors.lightGreyBackground};
   position: absolute;
   top: 4rem;
   right: 0;
   left: 0;
   border-radius: 0 0 0.5vw 0.5vw;
   z-index: 2;
   overflow: hidden;
   ul {
      display: flex;
      flex-flow: column;
   }
   @media ${devices.tablet} {
      top: 2.5rem;
   }
`;
