import Head from 'next/head';
import { useRouter } from 'next/router';
import {
   getPortfolioStaticPaths,
   getPortfolioStaticProps,
} from '@/utils/functions/portfolioStaticProps';

import portfolioSmallCardsData from '../../utils/data/portfolio/projectsData';
import Error404 from '../_error';
import { LargeCardProvider } from '@/utils/context/largeCard';
import LargeCards from '@/components/Body/LargeCards/LargeCards';

export default function Project() {
   const router = useRouter();
   const { project } = router.query;
   // Contain data of selected project
   const data = portfolioSmallCardsData[parseInt(project) - 1];

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
   const paths = getPortfolioStaticPaths();
   return {
      paths,
      fallback: true,
   };
}

// Get data for selected project
function getStaticProps({ params }) {
   const data = getPortfolioStaticProps(params);
   return { data: data.data || null };
}
