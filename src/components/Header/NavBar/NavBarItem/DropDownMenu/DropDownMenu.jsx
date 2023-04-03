import styled from 'styled-components';

import { colors } from '@/utils/style/colors';
import MenuItem from './MenuItem/MenuItem';

export default function DropDownMenu({ link, setOpenLink }) {
   const subMenuLinks = link.subNav;

   return (
      <>
         <DropDownMenuDiv>
            <ul>
               {subMenuLinks
                  ? subMenuLinks.map((link, index) => (
                       <MenuItem
                          key={index}
                          link={link}
                          setOpenLink={setOpenLink}
                       />
                    ))
                  : ''}
            </ul>
         </DropDownMenuDiv>
      </>
   );
}

const DropDownMenuDiv = styled.div`
   background-color: ${colors.lightGreyBackground};
   position: absolute;
   top: 3.5vw;
   right: 0;
   left: 0;
   border-radius: 0 0 0.5rem 0.5rem;
   z-index: 2;
   overflow: hidden;
   ul {
      display: flex;
      flex-flow: column;
   }
`;
