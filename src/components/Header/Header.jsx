import styled from 'styled-components';

import { devices } from '../../utils/style/breakpoints';

import NavBar from './NavBar/NavBar';
import SearchIcon from '../Icons/SearchIcon';
import ProfilUser from './ProfilUser/ProfilUser';
import Logo from './Logo/Logo';

export default function Header() {
   return (
      <StyledHeader>
         <Logo />
         <NavBar />
         <SearchIcon />
         <ProfilUser />
      </StyledHeader>
   );
}

//STYLES
const StyledHeader = styled.header`
   height: 3.5vw;
   margin: auto;
   display: flex;
   align-items: center;
   justify-content: center;
`;
