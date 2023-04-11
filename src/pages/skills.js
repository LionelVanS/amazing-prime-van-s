import Head from 'next/head';
import styled from 'styled-components';

import SimpleCard from '@/components/Body/SimpleCard/SimpleCard';

// BACKGROUNDS STATIC IMAGES
import bg1 from '../../public/images/stack/1.jpg';
import bg2 from '../../public/images/stack/2.jpg';
import bg3 from '../../public/images/stack/3.jpg';
import bg4 from '../../public/images/stack/4.jpg';
import bg5 from '../../public/images/stack/5.jpg';
import bg6 from '../../public/images/stack/6.jpg';

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
            {smallCardsData.map((datas) => (
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

const smallCardsData = [
   {
      name: 'Techniques',
      datas: [
         { title: 'HTML', background: bg1 },
         { title: 'CSS', background: bg2 },
         { title: 'Sass', background: bg5 },
         { title: 'Javascript', background: bg3 },
         { title: 'React', background: bg5 },
         { title: 'NextJs', background: bg4 },
         { title: 'NodeJs', background: bg1 },
         { title: 'Express', background: bg6 },
         { title: 'TypeScript', background: bg1 },
         { title: 'Angular', background: bg4 },
      ],
   },
   {
      name: 'Transversales',
      datas: [
         { title: 'Figma', background: bg1 },
         { title: 'GitHub', background: bg3 },
         { title: 'Photoshop', background: bg2 },
         { title: 'Photoshop Lightroom', background: bg5 },
      ],
   },
];
