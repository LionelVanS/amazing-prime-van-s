import Head from 'next/head';
import { HeroBannerProvider } from '@/utils/context/heroBanner';
import homePageSmallCardsData from '@/utils/data/smallCards/home';
import homePageHeroBannerData from '@/utils/data/heroBanner/home';
import HeroBanner from '@/components/Body/HeroBanner/HeroBanner';
import DropDownCards from '@/components/Body/DropDownCards/DropDownCards';

export default function Home() {
   return (
      <>
         <Head>
            <title>Prime Van S</title>
            <meta
               name="description"
               content="Bienvenue sur mon portfolio. Il s'agit d'un clône du site prime vidéo."
            />
         </Head>
         <main>
            <HeroBannerProvider heroBannerData={homePageHeroBannerData}>
               <HeroBanner />
            </HeroBannerProvider>
            <section>
               <DropDownCards
                  datas={homePageSmallCardsData}
                  title="Ajoutés Récemment"
               />
            </section>
         </main>
      </>
   );
}
