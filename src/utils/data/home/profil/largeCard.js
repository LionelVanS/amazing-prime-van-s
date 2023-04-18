import background from '/public/images/home/profil/large-card-background.jpg';

// ICONS
import TwitterIcon from '@/components/Icons/TwitterIcon';
import LinkedInIcon from '@/components/Icons/LinkedInIcon';
import GithubIcon from '@/components/Icons/GithubIcon';
import DownloadIcon from '@/components/Icons/DownloadIcon';

const largeCardData = {
   title: ' Lionel VAN SCHELLEBECK',
   include: 'Vous ne regretterez pas !',
   text: "Au cœur de la ville, au milieu de la foule, Lionel apparaît, les bras ouverts à l'inconnu, un sourire timide aux lèvres et le regard fuyant. Il est là, prêt à plonger dans cette mer agitée qu'est la vie. Mais Lionel n'est pas sûr de lui, il doute de ses capacités, de ses choix, de ses rêves. Il se méfie des regards des autres, des jugements, des attentes. Et pourtant, il est là, prêt à affronter l'inconnu.",
   infos: [
      {
         data: '06 / 04 / 1989',
      },
      {
         data: '34 ans',
      },
      {
         data: '',
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
