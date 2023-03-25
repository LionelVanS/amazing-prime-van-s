// LIBS
import Head from 'next/head';

// DATA
import { homePageData } from '@/utils/data/HeroBannerData';

// IMPORTED COMPONENTS
import HeroBanner from '@/components/Body/HeroBanner/HeroBanner';

// EXPORTED COMPONENT
export default function Home() {
   return (
      <>
         <Head>
            <title>Prime Van S</title>
         </Head>
         <main>
            <HeroBanner data={homePageData} />
         </main>
      </>
   );
}
