import background from '/public/images/career/formation/oc-background.jpg';

import TwitterIcon from '@/components/Icons/TwitterIcon';
import LinkedInIcon from '@/components/Icons/LinkedInIcon';
import GithubIcon from '@/components/Icons/GithubIcon';
import DownloadIcon from '@/components/Icons/DownloadIcon';

const largeCardData = {
   title: ' Développeur Intégrateur Web',
   text: '',
   include: 'Formation 100 % en ligne',
   infos: [
      {
         data: 'exemple',
      },
      {
         data: 'exemple',
      },
      {
         data: 'exemple',
      },
   ],
   capacity: [
      {
         name: 'exemple',
      },
      {
         name: 'exemple',
      },
      {
         name: 'exemple',
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
