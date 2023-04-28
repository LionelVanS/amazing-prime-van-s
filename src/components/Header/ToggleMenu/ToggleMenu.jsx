import ArrowIcon from '@/components/Icons/ArrowIcon';
import { devices } from '@/utils/style/breakpoints';
import styled from 'styled-components';

export default function ToggleMenu() {
   return (
      <ToggleDiv>
         <p>Menu</p>
         <ArrowIcon />
      </ToggleDiv>
   );
}

const ToggleDiv = styled.div`
   display: flex;
   align-items: center;
   svg {
      color: #fff;
   }
   @media ${devices.tablet}, ${devices.desktop} {
      display: none;
   }
`;
