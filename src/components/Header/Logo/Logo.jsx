import Link from 'next/link';
import styled from 'styled-components';

export default function Logo() {
   return (
      <>
         <LogoDiv>
            <Link href="/home">
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
   margin: 0 3.5vw 0 2vw;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Image = styled.img`
   width: 127px;
   height: 24px;
`;
