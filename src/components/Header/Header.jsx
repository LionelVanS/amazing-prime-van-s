import styled from 'styled-components';

// IMPORTED COMPONENTS
import NavBar from './NavBar/NavBar';
import SearchIcon from './Icons/SearchIcon/SearchIcon';
import ProfilUser from './ProfilUser/ProfilUser';
import Logo from './Logo/Logo';

// EXPORTED COMPONENT
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
   height: 4rem;
   display: flex;
   justify-content: center;
   align-items: center;
`;
