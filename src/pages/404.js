import Logo from '@/components/Header/Logo/Logo';
import Link from 'next/link';
import styled from 'styled-components';

export default function Error404() {
   return (
      <ErrorSection>
         <h1>Oups ! La page demandé n&apos;existe pas</h1>
         <Link href="/home">Revenir à la page d&apos;accueil</Link>
      </ErrorSection>
   );
}

const ErrorSection = styled.section`
   height: 70vh;
   width: 100vw;
   display: flex;
   flex-flow: column;
   justify-content: center;
   align-items: center;
   h1 {
      margin-bottom: 1vw;
   }
   a:hover {
      text-decoration: underline;
   }
`;
