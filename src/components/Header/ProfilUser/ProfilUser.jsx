import Image from 'next/image';
import styled from 'styled-components';
import colors from '@/utils/style/colors';

// REACT HOOKS
import { useState } from 'react';

// IMPORTED COMPONENT
import UserMenu from './UserMenu/UserMenu';

// EXPORTED COMPONENT
export default function ProfilUser() {
   const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);

   return (
      <ProfilDiv
         onMouseOver={() => setUserMenuIsOpen(true)}
         onMouseOut={() => setUserMenuIsOpen(false)}
      >
         <p>Van Schellebeck Lionel</p>
         <Image
            src="/assets/images/profil-picture.jpg"
            alt="Image de profil"
            width="40"
            height="40"
         />
         {userMenuIsOpen ? <UserMenu /> : ' '}
      </ProfilDiv>
   );
}

// STYLES
const ProfilDiv = styled.div`
   height: 100%;
   display: flex;
   align-items: center;
   cursor: pointer;
   position: relative;
   &:hover {
      background-color: #191e25;
      box-shadow: inset 0 -1rem 1rem -1.5rem black;
   }
   > p {
      font-size: 20px;
      font-weight: 450;
      margin: 0;
      color: ${colors.notHoveredText};
      padding: 1rem;
   }
   > img {
      border-radius: 50%;
      margin-right: 1rem !important;
   }
`;
