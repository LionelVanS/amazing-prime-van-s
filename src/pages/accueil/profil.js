import LargeCards from '@/components/Body/LargeCards/LargeCards';
import { LargeCardProvider } from '@/utils/context/largeCard';
import Head from 'next/head';
import background from 'public/images/large-card/profil-large-card.jpg';

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

const largeCardData = {
   title: ' Mon Profil',
   text: "Au cœur de la ville, au milieu de la foule, Lionel apparaît, les bras ouverts à l'inconnu, un sourire timide aux lèvres et le regard fuyant. Il est là, prêt à plonger dans cette mer agitée qu'est la vie. Mais Lionel n'est pas sûr de lui, il doute de ses capacités, de ses choix, de ses rêves. Il se méfie des regards des autres, des jugements, des attentes. Et pourtant, il est là, prêt à affronter l'inconnu.",
   infos: [
      {
         data: ' IMDB 10.0',
      },
      {
         data: '34 ans',
      },
      {
         data: '06 / 04 / 1989',
      },
   ],
   capacity: [
      {
         name: 'Curieux',
      },
      {
         name: 'Passionné',
      },
      {
         name: 'Sympathique',
      },
   ],
   image: background,
};
