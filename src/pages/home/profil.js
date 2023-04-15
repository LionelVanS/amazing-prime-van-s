import Head from 'next/head';
import { LargeCardProvider } from '@/utils/context/largeCard';
import largeCardData from '@/utils/data/home/profil/largeCard';
import LargeCards from '@/components/Body/LargeCards/LargeCards';

export default function Profil() {
   return (
      <>
         <Head>
            <title>Prime Van S: Profil</title>
            <meta
               name="description"
               content="Consultez mon profil pour en apprendre plus sur moi !"
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
