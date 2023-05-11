import Link from 'next/link';
import styled from 'styled-components';

export default function SkipButton() {
   return (
      <SkipDiv>
         <Link href="/home">Skip Animation</Link>
      </SkipDiv>
   );
}

const SkipDiv = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`;
