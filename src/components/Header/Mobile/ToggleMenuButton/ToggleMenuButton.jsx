import ArrowIcon from '@/components/Icons/ArrowIcon';
import { devices } from '@/utils/style/breakpoints';
import { useState } from 'react';
import styled from 'styled-components';
import OverlayMenu from '../OverlayMenu/OverlayMenu';
import { colors } from '@/utils/style/colors';
import links from '@/utils/data/header/links';

export default function ToggleMenuButton() {
   const [openedToggleMenu, setOpenedToggleMenu] = useState(false);

   return (
      <>
         <ToggleDiv
            onClick={() => setOpenedToggleMenu(!openedToggleMenu)}
            openedToggleMenu={openedToggleMenu}
         >
            <p>Menu</p>
            <ArrowIcon openedToggleMenu={openedToggleMenu} />
            {openedToggleMenu && (
               <OverlayMenu links={links} parent="toggleMenuButton" />
            )}
         </ToggleDiv>
      </>
   );
}

const ToggleDiv = styled.div`
   height: 100%;
   display: flex;
   align-items: center;
   cursor: pointer;
   background-color: ${(props) =>
      props.openedToggleMenu ? colors.lightGreyBackground : ''};
   padding: 1rem;
   svg {
      color: #fff;
   }

   @media ${devices.tablet}, ${devices.desktop} {
      display: none;
   }
`;
