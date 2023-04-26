import Head from 'next/head';
import { useRouter } from 'next/router';
import { getPaths, getProps } from '@/utils/functions/getStaticData';

import projectsData from '../../utils/data/portfolio/projectsData';
import Error404 from '../404';
import { LargeCardProvider } from '@/utils/context/largeCard';
import LargeCards from '@/components/Body/LargeCards/LargeCards';

export default function Project() {
   const router = useRouter();
   const { project } = router.query;

   // Contain data of selected project
   const data = projectsData[parseInt(project) - 1];

   // Verifying if there is data or if path is exactly correct
   if (!data || isNaN(project)) {
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
   const paths = getPaths(projectsData, 'project');
   return {
      paths,
      fallback: true,
   };
}

// Get data for selected project
function getStaticProps({ params }) {
   const data = getProps(projectsData, 'project', params);
   return { data: data.data || null };
}
