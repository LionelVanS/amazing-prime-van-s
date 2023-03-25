// LIBS
import Head from 'next/head';

// DATA
import { portfolioPageData } from '@/utils/data/HeroBannerData';

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
            <HeroBanner data={portfolioPageData} />
         </main>
      </>
   );
}
