import Head from 'next/head';
import styled from 'styled-components';
import smallCardsData from '@/utils/data/skills/smallCardsData';
import SimpleCard from '@/components/Body/smallCards/SimpleCard/SimpleCard';
import { devices } from '@/utils/style/breakpoints';

export default function Skills() {
   return (
      <>
         <Head>
            <title>Prime Van S: Compétences</title>
            <meta
               name="description"
               content="Prenez connaissances de mes compétences !"
            />
         </Head>
         <SkillsMain>
            <H1>Mes Compétences</H1>
            {smallCardsData.map((data) => (
               <section key={data.name} id={data.name}>
                  <H2>{data.name}</H2>
                  <CardsDiv>
                     <SimpleCard data={data} />
                  </CardsDiv>
               </section>
            ))}
         </SkillsMain>
      </>
   );
}
const SkillsMain = styled.main`
   margin: 0 3vw 4vw 3vw;
`;
const H1 = styled.h1`
   font-size: 2vw;
   margin: 2vw 0 0 0;
   @media ${devices.tablet} {
      font-size: 3vw;
   }
   @media ${devices.mobileL} {
      font-size: 3.5vw;
   }
   @media ${devices.mobileM} {
      font-size: 4vw;
   }
`;

const H2 = styled.h2`
   @media ${devices.tablet} {
      font-size: 2vw;
   }
   @media ${devices.mobileL} {
      font-size: 2.5vw;
   }
   @media ${devices.mobileM} {
      font-size: 3vw;
   }
`;

const CardsDiv = styled.div`
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   grid-gap: 1vw;
   @media ${devices.tablet} {
      grid-template-columns: repeat(4, 1fr);
   }
   @media ${devices.mobileL} {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2vw;
   }
   @media ${devices.mobileM} {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2vw;
   }
`;
