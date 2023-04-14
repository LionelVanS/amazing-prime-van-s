import DropDownCards from '@/components/Body/DropDownCards/DropDownCards';
import HeroBanner from '@/components/Body/HeroBanner/HeroBanner';
import { HeroBannerProvider } from '@/utils/context/heroBanner';
import Head from 'next/head';

import background from 'public/images/large-card/portfolio-large-card.jpg';

import ohMyFoodLogo from '../../../public/images/projects/ohmyfood.png';
import kanapLogo from '../../../public/images/projects/kanap.png';
import piiquanteLogo from '../../../public/images/projects/piiquante.png';
import groupomaniaLogo from '../../../public/images/projects/groupomania.png';
import portfolioLogo from '../../../public/images/projects/portfolio.png';

export default function Portfolio() {
   return (
      <>
         <Head>
            <title>Prime Van S: Portfolio</title>
            <meta
               name="description"
               content="Jetez un oeil à mes dernieres réalisations !"
            />
         </Head>
         <main>
            <HeroBannerProvider heroBannerData={heroBannerData}>
               <HeroBanner />
            </HeroBannerProvider>
            <section id="projects">
               <DropDownCards datas={smallCardsData} title="Mes Projets" />
            </section>
            <a href="/portfolio/project">Cliquez ici</a>
         </main>
      </>
   );
}
const heroBannerData = {
   title: 'Portfolio',
   secondPartTitle: '',
   subtitle: 'Développeur Front-End React',
   infos: 'HTML | CSS | Javascript | React',
   image: background,
   link: '#projects',
};

const smallCardsData = [
   {
      title: 'Kanap',
      logo: kanapLogo,
      link: '/portfolio',
      date: '2022',
      duration: '1 an',
      text: '',
   },
   {
      title: 'Piiquante',
      logo: piiquanteLogo,
      link: 'https://www.celestin-materiaux.fr/',
      date: '2007',
      duration: '16 ans',
      text: '',
   },
   {
      title: 'Groupomania',
      logo: groupomaniaLogo,
      link: 'https://www.mplus-materiaux.fr/',
      date: '2022',
      duration: '1 an',
      text: '',
   },
   {
      title: 'Portfolio',
      logo: portfolioLogo,
      link: 'https://www.dssmith.com/fr/',
      date: '2022',
      duration: '1 an',
      text: '',
   },
];
