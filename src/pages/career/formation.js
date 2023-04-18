import Head from 'next/head';
import { LargeCardProvider } from '@/utils/context/largeCard';
import LargeCards from '@/components/Body/LargeCards/LargeCards';
import largeCardData from '@/utils/data/career/formation/largeCard';

export default function Formation() {
   return (
      <>
         <Head>
            <title>Prime Van S: Formation</title>
            <meta name="description" content="Quel est mon niveau d\étude ?" />
         </Head>
         <main>
            <LargeCardProvider largeCardData={largeCardData}>
               <LargeCards />
            </LargeCardProvider>
         </main>
      </>
   );
}
