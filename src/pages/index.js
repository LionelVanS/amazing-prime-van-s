import Head from 'next/head';
import { LargeCardProvider } from '@/utils/context/largeCard';
import largeCardData from '@/utils/data/home/largeCardData';
import LargeCards from '@/components/Body/LargeCards/LargeCards';

export default function Profil() {
   return (
      <>
         <Head>
            <title>Prime Van S</title>
            <meta
               name="description"
               content="Lionel Van Schellebeck - Développeur Front End Javascript | React | NextJs"
            />
         </Head>
         <main>
            <LargeCardProvider largeCardData={largeCardData}>
               <LargeCards />
            </LargeCardProvider>
         </main>
      </>
   );
}
