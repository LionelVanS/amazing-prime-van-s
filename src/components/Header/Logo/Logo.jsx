import Link from 'next/link';
import styled from 'styled-components';

// EXPORTED COMPONENT
export default function Logo() {
   return (
      <>
         <LogoDiv>
            <Link href="/">
               <Image
                  src="/images/logo.png"
                  alt="logo prime van s"
                  width="104"
                  height="20"
               />
            </Link>
         </LogoDiv>
      </>
   );
}

//STYLES
const LogoDiv = styled.div`
   height: 100%;
   margin-right: 4vw;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Image = styled.img`
   width: 7.8vw;
   height: 1.5vw;
`;
