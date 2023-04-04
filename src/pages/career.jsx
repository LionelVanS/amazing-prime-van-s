import Head from 'next/head';
import { HeroBannerProvider } from '@/utils/context/HeroBanner';
import careerBackground from '../../public/images/careerpage-background.jpg';
import HeroBanner from '@/components/Body/HeroBanner/HeroBanner';

export default function Career() {
   return (
      <>
         <Head>
            <title>Prime Van S: Parcours</title>
         </Head>
         <main>
            <HeroBannerProvider heroBannerData={heroBannerData}>
               <HeroBanner />
            </HeroBannerProvider>
         </main>
      </>
   );
}

const heroBannerData = {
   title: 'Mon Parcours',
   secondPartTitle: 'De 2007 A 2023',
   subtitle: 'Ne restez pas spectateur de ma réussite !',
   image: careerBackground,
   infos: 'BTP | Logistique | Production',
   link: '/formation',
};
