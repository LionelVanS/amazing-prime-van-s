import Head from 'next/head';
import { useRouter } from 'next/router';

import { getPaths, getProps } from '@/utils/functions/getStaticData';
import { LargeCardProvider } from '@/utils/context/largeCard';
import careerData from '../../utils/data/career/careerData';

import Error404 from '../404';
import LargeCards from '@/components/Body/LargeCards/LargeCards';

export default function Experiences() {
   const router = useRouter();

   const { experiences } = router.query;

   // Contain data of selected project
   const data = careerData[parseInt(experiences) - 1];

   // Verifying if there is data or if path is exactly correct
   if (!data || isNaN(experiences)) {
      return <Error404 />;
   }

   return (
      <>
         <Head>
            <title>Prime Van S: {data.title}</title>
            <meta name="description" content={`Page du projet ${data.title}`} />
         </Head>
         <main>
            <LargeCardProvider largeCardData={data}>
               <LargeCards />
            </LargeCardProvider>
         </main>
      </>
   );
}

// Get path for selected project
async function getStaticPaths() {
   const paths = getPaths(careerData, 'experiences');
   return {
      paths,
      fallback: true,
   };
}

// Get data for selected project
function getStaticProps({ params }) {
   const data = getProps(careerData, 'experiences', params);
   return { data: data.data || null };
}
