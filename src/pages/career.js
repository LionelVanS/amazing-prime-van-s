import Head from 'next/head';
import careerBackground from '../../public/images/careerpage-background.jpg';
import HeroBanner from '@/components/Body/HeroBanner/HeroBanner';

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

const HeroBannerData = {
   title: 'Mon Parcours',
   subtitle: "Suivez l'histoire de ma vie !",
   image: careerBackground,
   link: '/',
};
