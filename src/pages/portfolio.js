import LargeCards from '@/components/Body/LargeCards/LargeCards';
import { LargeCardProvider } from '@/utils/context/largeCard';
import Head from 'next/head';
import background from 'public/images/large-card/portfolio-large-card.jpg';

export default function Portfolio() {
   return (
      <>
         <Head>
            <title>Prime Van S: Portfolios</title>
            <meta
               name="description"
               content="Jetez un oeil à mes dernieres réalisations !"
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

const largeCardData = {
   title: ' Mes Projets',
   text: '',
   infos: [
      {
         data: ' ',
      },
      {
         data: '',
      },
      {
         data: '',
      },
   ],
   capacity: [
      {
         name: 'Javascript',
      },
      {
         name: 'React | NextJS',
      },
      {
         name: '',
      },
   ],
   image: background,
};
