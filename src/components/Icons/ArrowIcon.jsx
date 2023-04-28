import { devices } from '@/utils/style/breakpoints';
import styled from 'styled-components';

export default function ArrowIcon({ openLink }) {
   return (
      <StyledSvg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         stroke={openLink ? '#fff' : 'currentColor'}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         openLink={openLink}
      >
         <polyline points="6 9 12 15 18 9"></polyline>
      </StyledSvg>
   );
}

const StyledSvg = styled.svg`
   width: 1.2rem;
   height: 1.2rem;
   margin-left: 0.5vw;
   transition: all 100ms ease-in;
   transform: ${(props) => (props.openLink ? 'rotate(180deg)' : '')};
   @media (${devices.mobileL}) {
      // Toggle animation
   }
   @media ${devices.tablet} {
      width: 0.8rem;
      height: 0.8rem;
   }
`;
