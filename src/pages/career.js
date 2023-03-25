// LIBS
import Head from 'next/head';

// DATA
import { careerPageData } from '@/utils/data/HeroBannerData';

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
            <HeroBanner data={careerPageData} />
         </main>
      </>
   );
}
