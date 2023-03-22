// LIBS
import Head from 'next/head';

// IMPORTED COMPONENTS
import HeroBanner from '@/components/Body/HeroBanner/HeroBanner';

// EXPORTED COMPONENT
export default function Portfolio() {
   return (
      <>
         <Head>
            <title>Prime Van S: Portfolios</title>
         </Head>
         <main>
            <HeroBanner data={InfoCardData} />
         </main>
      </>
   );
}

// DATA
const InfoCardData = {
   title: 'Lionel VAN SCHELLEBECK',
   subtitle: "Le développeur qu'il vous faut",
   technologies: 'Javascript | React',
   image: '/assets/images/homepage-background.jpg',
   link: '/',
};
