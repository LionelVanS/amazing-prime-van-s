import Image from 'next/image';
import styled from 'styled-components';

import { colors } from '@/utils/style/colors';
import { devices } from '@/utils/style/breakpoints';

import { useState } from 'react';

import UserMenu from './UserMenu/UserMenu';

export default function ProfilUser() {
   const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);

   return (
      <ProfilDiv
         onMouseOver={() => setUserMenuIsOpen(true)}
         onMouseOut={() => setUserMenuIsOpen(false)}
      >
         <p>Lionel</p>
         <Image
            src="/images/profil-picture.jpg"
            alt="Image de profil"
            width="40"
            height="40"
         />
         {userMenuIsOpen ? <UserMenu /> : ' '}
      </ProfilDiv>
   );
}

const ProfilDiv = styled.div`
   height: 3.5vw;
   display: flex;
   align-items: center;
   cursor: pointer;
   position: relative;
   &:hover {
      background-color: ${colors.lightGreyBackground};
      box-shadow: inset 0 -1rem 1rem -1.5rem black;
   }
   > p {
      font-size: 1vw;
      font-weight: 500;
      margin: 0;
      padding-left: 1vw;
      color: ${colors.text};
   }
   > img {
      width: 2.3vw;
      height: 2.3vw;
      border-radius: 50%;
      margin: 0 1vw;
   }

   @media (${devices.tablet}) {
      > p {
         display: none;
      }
   }
`;
