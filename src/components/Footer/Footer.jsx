import styled from 'styled-components';

export default function Footer() {
   return (
      <StyledFooter>
         <StyledP>
            © 2023 - Lionel Van Schellebeck - Développeur Web - Javascript |
            React.
         </StyledP>
      </StyledFooter>
   );
}

// STYLES
const StyledFooter = styled.footer`
   margin-top: 4rem;
`;
const StyledP = styled.p`
   text-align: center;
   font-size: 1vw;
`;
