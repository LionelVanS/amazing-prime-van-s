import Head from 'next/head';
import styled from 'styled-components';
import smallCardsData from '@/utils/data/skills/smallCardsData';
import SimpleCard from '@/components/Body/smallCards/SimpleCard/SimpleCard';

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
                  <h2>{data.name}</h2>
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
`;

const CardsDiv = styled.div`
   display: flex;
   flex-flow: row wrap;
   gap: 1.2vw;
`;
