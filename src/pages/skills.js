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
   { title: 'HTML', image: bg1 },
   { title: 'CSS', image: bg2 },
   { title: 'Sass', image: bg5 },
   { title: 'Javascript', image: bg3 },
   { title: 'React', image: bg5 },
   { title: 'NextJs', image: bg4 },
   { title: 'NodeJs', image: bg1 },
   { title: 'Express', image: bg6 },
   { title: 'TypeScript', image: bg1 },
   { title: 'Angular', image: bg4 },
];

const transferableSkillsDatas = [
   { title: 'Figma', image: bg1 },
   { title: 'GitHub', image: bg3 },
   { title: 'Photoshop', image: bg2 },
   { title: 'Photoshop Lightroom', image: bg5 },
];

const softSkillsDatas = [
   { title: 'Passionné', image: bg4 },
   { title: 'Curieux', image: bg2 },
   { title: 'Sympathique', image: bg6 },
];
