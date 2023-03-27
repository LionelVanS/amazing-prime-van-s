// LIBS
import Head from 'next/head';

// IMPORTED STATIC IMAGES
import homeBackground from '../../public/images/homepage-background.jpg';

// IMPORTED COMPONENTS
import HeroBanner from '@/components/Body/HeroBanner/HeroBanner';
import SmallCards from '@/components/Body/SmallCards/SmallCards';

// EXPORTED COMPONENT
export default function Home() {
   return (
      <>
         <Head>
            <title>Prime Van S</title>
         </Head>
         <main>
            <HeroBanner data={HeroBannerData} />
            <section>
               <SmallCards data={cardsData} />
            </section>
         </main>
      </>
   );
}

// DATAS
const HeroBannerData = {
   title: 'Lionel',
   secondPartTitle: 'VAN SCHELLEBECK',
   subtitle: 'A Brand New Front-End Developer !',
   technologies: 'Javascript | React',
   image: homeBackground,
   link: '/profil',
};

const cardsData = {
   sectionTitle: 'Vous avez visités ces pages',
   title: 'Mes Compétences',
};
