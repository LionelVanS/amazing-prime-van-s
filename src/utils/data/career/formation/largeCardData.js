// BACKGROUND
import background from '/public/images/career/formation/oc-background.jpg';

// ICONS
import TwitterIcon from '@/components/Icons/TwitterIcon';
import LinkedInIcon from '@/components/Icons/LinkedInIcon';
import GithubIcon from '@/components/Icons/GithubIcon';
import DownloadIcon from '@/components/Icons/DownloadIcon';

const largeCardData = {
   title: ' Développeur Intégrateur Web',
   include: 'Titre RNCP niveau 5 obtenu',
   text: [
      {
         paraph:
            "J'ai suivi le parcours développeur intégrateur web en 6 mois dispensé par l'école en ligne OpenClassrooms. Au programme, 7 projets tirés de situations professionnelles diverses et mise en scène pour accentuer l'effet. Chaque module doit être validé par un examinateur, pour au final passer devant un jury de professionnels et enfin décrocher son diplôme.  ",
      },
      {
         paraph:
            "Mon apprentissage a nécessité beaucoup de courage pour parvenir à décrocher le sésame tant convoité. La formation est aussi compacte que le temps pour les réaliser ! Bien qu'aujourd'hui ce soit terminée, je reste conscient que mon enseignement ne fait que commencer.",
      },
   ],
   infos: [
      {
         data: 'Formation 100% en ligne',
      },
      {
         data: 'Apprentissage par projets',
      },
   ],
   capacity: [
      {
         name: 'Autonomie',
      },
      {
         name: 'Gestion du temps de travail',
      },
   ],
   image: background,
   links: [
      {
         name: 'LinkedIn',
         link: 'https://www.linkedin.com/in/LionelVanS',
         icon: <LinkedInIcon />,
      },
      {
         name: 'Twitter',
         link: 'https://twitter.com/Lionel_Van_S',
         icon: <TwitterIcon />,
      },
      {
         name: 'Github',
         link: 'https://github.com/LionelVanS',
         icon: <GithubIcon />,
      },
      {
         name: 'Télécharger mon CV',
         link: '/pdf/CV_Van_Schellebeck_Lionel_DéveloppeurWeb.pdf',
         icon: <DownloadIcon />,
      },
   ],
};

export default largeCardData;
