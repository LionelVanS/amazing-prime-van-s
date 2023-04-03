import Link from 'next/link';
import styled from 'styled-components';

export default function Logo() {
   return (
      <>
         <LogoDiv>
            <Link href="/">
               <Image
                  src="/images/logo.png"
                  alt="logo prime van s"
                  width="127"
                  height="24"
               />
            </Link>
         </LogoDiv>
      </>
   );
}

//STYLES
const LogoDiv = styled.div`
   height: 100%;
   margin-right: 3.5vw;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Image = styled.img`
   width: 6.7vw;
   height: 1.3vw;
`;
