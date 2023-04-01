import Head from 'next/head';
import styled from 'styled-components';
import SmallCards from '../components/Body/SmallCards/SmallCards';
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
         </Head>
         <main>
            <section id="technical-skills">
               <H1>Mes Compétences</H1>
               <h2>Techniques</h2>
               <SmallCards datas={hardSkillsData} isHoveredCards={false} />
            </section>
            <section id="transferable-skills">
               <h2>Transversales</h2>
               <SmallCards
                  datas={transferableSkillsDatas}
                  isHoveredCards={false}
               />
            </section>
            <section id="soft-skills">
               <h2>Soft Skills</h2>
               <SmallCards datas={softSkillsDatas} isHoveredCards={false} />
            </section>
         </main>
      </>
   );
}

const H1 = styled.h1`
   font-size: 2vw;
   margin: 2vw 0 0 0;
`;

const hardSkillsData = [
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
];

const transferableSkillsDatas = [
   { title: 'Figma', background: bg1 },
   { title: 'GitHub', background: bg3 },
   { title: 'Photoshop', background: bg2 },
   { title: 'Photoshop Lightroom', background: bg5 },
];

const softSkillsDatas = [
   { title: 'Passionné', background: bg4 },
   { title: 'Curieux', background: bg2 },
   { title: 'Sympathique', background: bg6 },
];
