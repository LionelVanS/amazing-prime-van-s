import Head from 'next/head';
import homeBackground from '../../public/images/homepage-background.jpg';
import skillSmallCardsBg from '../../public/images/small-cards-skills.jpg';
import careerSmallCardsBg from '../../public/images/small-cards-career.jpg';
import portfolioSmallCardsBg from '../../public/images/small-cards-portfolio.jpg';
import HeroBanner from '@/components/Body/HeroBanner/HeroBanner';
import SmallCards from '@/components/Body/SmallCards/SmallCards';

export default function Home() {
   return (
      <>
         <Head>
            <title>Prime Van S</title>
         </Head>
         <main>
            <HeroBanner datas={HeroBannerData} />
            <section>
               <h2>Ajoutés Récemment</h2>
               <SmallCards datas={smallCardsData} isHoveredCards={true} />
            </section>
         </main>
      </>
   );
}

const HeroBannerData = {
   title: 'Lionel',
   secondPartTitle: 'VAN SCHELLEBECK',
   subtitle: 'A Brand New Front-End Developer !',
   technologies: 'Javascript | React',
   image: homeBackground,
   link: '/profil',
};

const smallCardsData = [
   {
      title: 'Le Parcours',
      background: careerSmallCardsBg,
      link: '/career#experiences',
      date: '2007',
      duration: '16 ans',
      text: "Au début de sa carrière, Lionel, un jeune homme plein de vitalité, cherche sa place dans ce monde. Entre métiers du BTP, logistique et ses propres rêves, il devra affronter bien des dangers pour devenir celui qu'il est supposer être. Saura-t-il relevé le défi ?",
   },
   {
      title: "L'Outil",
      background: skillSmallCardsBg,
      link: '/skills#technologies',
      date: '1989',
      duration: '34 ans',
      text: 'Une hache pour seul outil, aucune technologie ne saurait lui résister. Sa cible, la réussite.',
   },
   {
      title: 'Projets 2.0',
      background: portfolioSmallCardsBg,
      link: '/portfolio',
      date: '2022',
      duration: '1 an',
      text: "Découvrez la suite tant attendu du premier épisode, succès mondial en Isère, mais censuré en moins de 24h. Aujourdhui, notre artiste favoris de tous nous revient avec une série d'appli codé par lui Himself. ",
   },
];
