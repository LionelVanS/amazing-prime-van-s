import styled from 'styled-components';

export default function Footer() {
   return (
      <StyledFooter>
         <StyledP>
            © 2023 - Lionel Van Schellebeck - Développeur Web - Javascript |
            NextJS.
         </StyledP>
      </StyledFooter>
   );
}

// STYLES
const StyledFooter = styled.footer`
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
`;
const StyledP = styled.p`
   text-align: center;
`;
