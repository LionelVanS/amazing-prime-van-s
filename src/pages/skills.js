// LIBS
import Head from 'next/head';

// DATA
import { skillsPageData } from '@/utils/data/HeroBannerData';

// IMPORTED COMPONENTS
import HeroBanner from '@/components/Body/HeroBanner/HeroBanner';

// EXPORTED COMPONENT
export default function Skills() {
   return (
      <>
         <Head>
            <title>Prime Van S: Compétences</title>
         </Head>
         <main>
            <HeroBanner data={skillsPageData} />
         </main>
      </>
   );
}
