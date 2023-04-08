import Head from 'next/head';
import styled from 'styled-components';
import { HeroBannerProvider } from '@/utils/context/heroBanner';

import careerBackground from '../../public/images/careerpage-background.jpg';
import HeroBanner from '@/components/Body/HeroBanner/HeroBanner';
import DropDownCards from '@/components/Body/DropDownCards/DropDownCards';

import intermarcheBg from '../../public/images/career/intermarche.png';
import ghndBg from '../../public/images/career/ghnd.png';
import dsSmithBg from '../../public/images/career/ds-smith.png';
import celestinBg from '../../public/images/career/celestin.png';
import mPlusBg from '../../public/images/career/m+.png';
import tecumsehBg from '../../public/images/career/tecumseh.png';
import vanSPhotoBg from '../../public/images/career/van-s-photo.png';
import nemeraBg from '../../public/images/career/nemera.png';
import votreLogoBg from '../../public/images/career/votre-logo.png';

export default function Career() {
   return (
      <>
         <Head>
            <title>Prime Van S: Parcours</title>
         </Head>
         <main>
            <HeroBannerProvider heroBannerData={heroBannerData}>
               <HeroBanner />
            </HeroBannerProvider>
            <section id="experiences">
               <DropDownCards
                  datas={smallCardsData}
                  title="Mes Expériences Professionnelles"
               />
            </section>
         </main>
      </>
   );
}

const heroBannerData = {
   title: 'Mon Parcours',
   secondPartTitle: 'De 2007 A 2023',
   subtitle: 'Ne restez pas spectateur de ma réussite !',
   image: careerBackground,
   infos: 'BTP | Logistique | Production',
   link: '/formation',
};

const smallCardsData = [
   {
      title: 'GHND',
      logo: ghndBg,
      link: 'https://ghnd.fr/',
      date: '1989',
      duration: '34 ans',
      text: '',
   },
   {
      title: 'Van S Photographie',
      logo: vanSPhotoBg,
      link: '/portfolio',
      date: '2022',
      duration: '1 an',
      text: '',
   },
   {
      title: 'Célestin Matériaux',
      logo: celestinBg,
      link: 'https://www.celestin-materiaux.fr/',
      date: '2007',
      duration: '16 ans',
      text: '',
   },
   {
      title: 'M+ Matériaux',
      logo: mPlusBg,
      link: 'https://www.mplus-materiaux.fr/',
      date: '2022',
      duration: '1 an',
      text: '',
   },
   {
      title: 'DS Smith',
      logo: dsSmithBg,
      link: 'https://www.dssmith.com/fr/',
      date: '2022',
      duration: '1 an',
      text: '',
   },
   {
      title: 'Tecumseh',
      logo: tecumsehBg,
      link: 'https://www.tecumseh.com/fr/eu/products/',
      date: '2022',
      duration: '1 an',
      text: '',
   },
   {
      title: 'Nemera',
      logo: nemeraBg,
      link: 'https://www.nemera.net/',
      date: '2022',
      duration: '1 an',
      text: '',
   },
   {
      title: 'Intermarché',
      logo: intermarcheBg,
      link: 'https://www.mousquetaires.com/nos-filiales/logistique/alimentaire/',
      date: '2022',
      duration: '1 an',
      text: '',
   },
   {
      title: 'Votre Entreprise',
      logo: votreLogoBg,
      link: '/career#experiences',
      date: '2023 - 2024',
      duration: 'Au moins 2 ans',
      text: 'Ne restez pas spectateur de ma réussite !',
   },
];
