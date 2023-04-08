import styled from 'styled-components';

export default function Footer() {
   return (
      <StyledFooter>
         <p>
            © 2023 - Lionel Van Schellebeck - Développeur Web - Javascript |
            React.
         </p>
      </StyledFooter>
   );
}

const StyledFooter = styled.footer`
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   p {
      text-align: center;
      font-size: 1vw;
   }
`;
