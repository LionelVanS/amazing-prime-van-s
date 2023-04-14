import Head from 'next/head';
import { HeroBannerProvider } from '@/utils/context/heroBanner';

import HeroBanner from '@/components/Body/HeroBanner/HeroBanner';
import DropDownCards from '@/components/Body/DropDownCards/DropDownCards';
import careerHeroBannerData from '@/utils/data/heroBanner/career';
import careerSmallCardsData from '@/utils/data/smallCards/career';

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
            <HeroBannerProvider heroBannerData={careerHeroBannerData}>
               <HeroBanner />
            </HeroBannerProvider>
            <section id="experiences">
               <DropDownCards
                  datas={careerSmallCardsData}
                  title="Mes Expériences Professionnelles"
               />
            </section>
         </main>
      </>
   );
}
