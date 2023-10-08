import Head from 'next/head';
import { HeroBannerProvider } from '@/utils/context/heroBanner';

import HeroBanner from '@/components/Body/HeroBanner/HeroBanner';
import DropDownCards from '@/components/Body/smallCards/DropDownCards/DropDownCards';
import heroBannerData from '@/utils/data/career/heroBannerData';
import careerData from '@/utils/data/career/careerData';

export default function Career() {
   return (
      <>
         <Head>
            <title>Prime Van S: Parcours</title>
            <meta
               name="description"
               content="Consultez mon parcours professionnel !"
            />
         </Head>
         <main>
            <HeroBannerProvider heroBannerData={heroBannerData}>
               <HeroBanner />
            </HeroBannerProvider>
            <section id="experiences">
               <DropDownCards
                  data={careerData}
                  title="Mes Expériences Professionnelles"
               />
            </section>
         </main>
      </>
   );
}
