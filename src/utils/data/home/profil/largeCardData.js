// BACKGROUND
import background from '/public/images/home/profil/large-card-background.jpg';

// ICONS
import TwitterIcon from '@/components/Icons/TwitterIcon';
import LinkedInIcon from '@/components/Icons/LinkedInIcon';
import GithubIcon from '@/components/Icons/GithubIcon';
import DownloadIcon from '@/components/Icons/DownloadIcon';

const largeCardData = {
   title: ' Lionel VAN SCHELLEBECK',
   include: 'Livré avec toutes mes connaissances !',
   text: [
      {
         paraph:
            "Au cours de ces dix dernières années à travailler dans le domaine de la logistique, j'ai acquis de solide base en gestion de stocks et en planification de flux de travail. Cependant, mon désir de faire quelque chose de plus créatif et stimulant m'a poussé à poursuivre une formation dans le domaine du développement web, qui est une de mes passions. J'ai donc décidé de prendre un tournant dans ma carrière et de me lancer dans un nouveau défi. ",
      },
      {
         paraph:
            "Je suis maintenant prêt à mettre mes compétences en pratique dans un environnement professionnel stimulant et dynamique. Je suis convaincu que ma passion pour le développement web, combinée avec mon expérience de vie, me permettra de contribuer de manière significative et efficace à toute entreprise qui me donnera l'opportunité de travailler avec eux.",
      },
   ],
   infos: [
      {
         data: '06 / 04 / 1989',
      },
      {
         data: '34 ans',
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
         name: "Esprit d'équipe",
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
