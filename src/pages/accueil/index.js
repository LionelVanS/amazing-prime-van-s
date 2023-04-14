import Head from 'next/head';
import { HeroBannerProvider } from '@/utils/context/heroBanner';
import homeBackground from '../../../public/images/hero-banner/homepage-background.jpg';
import skillSmallCardsBg from '../../../public/images/small-card/small-cards-skills.jpg';
import careerSmallCardsBg from '../../../public/images/small-card/small-cards-career.jpg';
import portfolioSmallCardsBg from '../../../public/images/small-card/small-cards-portfolio.jpg';
import HeroBanner from '@/components/Body/HeroBanner/HeroBanner';
import DropDownCards from '@/components/Body/DropDownCards/DropDownCards';

export default function Home() {
   return (
      <>
         <Head>
            <title>Prime Van S</title>
            <meta
               name="description"
               content="Bienvenue sur mon portfolio. Il s'agit d'un clône du site prime vidéo."
            />
         </Head>
         <main>
            <HeroBannerProvider heroBannerData={heroBannerData}>
               <HeroBanner />
            </HeroBannerProvider>
            <section>
               <DropDownCards
                  datas={smallCardsData}
                  title="Ajoutés Récemment"
               />
            </section>
         </main>
      </>
   );
}

const heroBannerData = {
   title: 'Lionel',
   secondPartTitle: 'VAN SCHELLEBECK',
   subtitle: 'Développeur Front-End React',
   infos: 'Javascript | React',
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
