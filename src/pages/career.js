// LIBS
import Head from 'next/head';

// IMPORT STATIC IMAGE
import careerBackground from '../../public/images/careerpage-background.jpg';

// IMPORTED COMPONENTS
import HeroBanner from '@/components/Body/HeroBanner/HeroBanner';

// EXPORTED COMPONENT
export default function Career() {
   return (
      <>
         <Head>
            <title>Prime Van S: Parcours</title>
         </Head>
         <main>
            <HeroBanner datas={HeroBannerData} />
         </main>
      </>
   );
}

// DATA
export const HeroBannerData = {
   title: 'Mon Parcours',
   subtitle: "Suivez l'histoire de ma vie !",
   image: careerBackground,
   link: '/',
};
