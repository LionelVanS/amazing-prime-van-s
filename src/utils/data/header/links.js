// ICONS
import BriefCaseIcon from '@/components/Icons/BriefCaseIcon';
import HomeIcon from '@/components/Icons/HomeIcon';
import PenIcon from '@/components/Icons/PenIcon';
import PuzzleIcon from '@/components/Icons/PuzzleIcon';

const links = [
   // HOMEPAGE
   {
      name: 'Accueil',
      path: '/',
      icon: <HomeIcon />,
   },

   // CAREER PAGE
   {
      name: 'Parcours',
      path: '/career',
      icon: <BriefCaseIcon />,
      subNav: [
         {
            name: 'Expériences',
            path: '/career#experiences',
         },
         {
            name: 'Formation',
            path: '/career/formation',
         },
      ],
   },

   // SKILLS PAGE
   {
      name: 'Compétences',
      path: '/skills',
      icon: <PuzzleIcon />,
      subNav: [
         {
            name: 'Techniques',
            path: '/skills#Techniques',
         },
         {
            name: 'Transversales',
            path: '/skills#Transversales',
         },
      ],
   },

   // PORTFOLIO PAGE
   {
      name: 'Portfolio',
      path: '/portfolio',
      icon: <PenIcon />,
   },
];

export default links;
