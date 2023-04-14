import Head from 'next/head';

import { HeroBannerProvider } from '@/utils/context/heroBanner';
import portfolioHeroBannerData from '@/utils/data/heroBanner/portfolio';
import portfolioSmallCardsData from '@/utils/data/smallCards/portfolio';

import DropDownCards from '@/components/Body/DropDownCards/DropDownCards';
import HeroBanner from '@/components/Body/HeroBanner/HeroBanner';

export default function Portfolio() {
   return (
      <>
         <Head>
            <title>Prime Van S: Portfolio</title>
            <meta
               name="description"
               content="Jetez un oeil à mes dernieres réalisations !"
            />
         </Head>
         <main>
            <HeroBannerProvider heroBannerData={portfolioHeroBannerData}>
               <HeroBanner />
            </HeroBannerProvider>
            <section id="projects">
               <DropDownCards
                  datas={portfolioSmallCardsData}
                  title="Mes Projets"
               />
            </section>
            <a href="/portfolio/project">Cliquez ici</a>
         </main>
      </>
   );
}
