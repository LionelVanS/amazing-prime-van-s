import Head from 'next/head';
import styled from 'styled-components';
import skillsSmallCardsData from '@/utils/data/smallCards/skills';
import SimpleCard from '@/components/Body/SimpleCard/SimpleCard';

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
            {skillsSmallCardsData.map((datas) => (
               <section key={datas.name} id={datas.name}>
                  <h2>{datas.name}</h2>
                  <CardsDiv>
                     <SimpleCard datas={datas} />
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
