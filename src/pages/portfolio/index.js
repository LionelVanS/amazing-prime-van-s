import Head from 'next/head';

import { HeroBannerProvider } from '@/utils/context/heroBanner';
import heroBannerData from '@/utils/data/portfolio/heroBannerData';
import projectsData from '@/utils/data/portfolio/projectsData';

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
            <HeroBannerProvider heroBannerData={heroBannerData}>
               <HeroBanner />
            </HeroBannerProvider>
            <section id="projects">
               <DropDownCards datas={projectsData} title="Mes Projets" />
            </section>
         </main>
      </>
   );
}
