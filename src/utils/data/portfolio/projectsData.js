// LOGOS
import ohmyfoodLogo from '/public/images/portfolio/projects/ohmyfood.png';
import lapanthereLogo from '/public/images/portfolio/projects/lapanthere.png';
import kanapLogo from '/public/images/portfolio/projects/kanap.png';
import piiquanteLogo from '/public/images/portfolio/projects/piiquante.png';
import groupomaniaLogo from '/public/images/portfolio/projects/groupomania.png';
import portfolioLogo from '/public/images/portfolio/projects/portfolio.png';

// HEROBANNER'S BACKGROUND
import ohmyfoodBackground from '/public/images/portfolio/projects/ohmyfood-background.jpg';
import laPanthereBackground from '/public/images/portfolio/projects/lapanthere-background.jpg';
import kanapBackground from '/public/images/portfolio/projects/kanap-background.jpg';
import piiquanteBackground from '/public/images/portfolio/projects/piiquante-background.jpg';
import groupomaniaBackground from '/public/images/portfolio/projects/groupomania-background.jpg';
import portfolioBackground from '/public/images/portfolio/projects/portfolio-background.jpg';

// ICONS
import GithubIcon from '@/components/Icons/GithubIcon';
import WebIcon from '@/components/Icons/WebIcon';

const portfolioSmallCardsData = [
   {
      id: 1,
      title: 'Oh My Food',
      logo: ohmyfoodLogo,
      image: ohmyfoodBackground,
      reason: "Projet d'école",
      link: 'project',
      date: '2022',
      duration: "Projet d'école",
      text: 'Ce projet a pour objectif de travailler avec Sass, et de maitriser les animations',
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
      links: [
         {
            name: 'Repo Github',
            link: 'https://github.com/LionelVanS/Ohmyfood',
            icon: <GithubIcon />,
         },
         {
            name: 'Visitez le site',
            link: 'https://lionelvans.github.io/Ohmyfood/',
            icon: <WebIcon />,
         },
      ],
   },
   {
      id: 2,
      title: 'La Panthère',
      logo: lapanthereLogo,
      image: laPanthereBackground,
      reason: "Projet d'école",
      link: 'project',
      date: '2022',
      duration: "Projet d'école",
      text: '',
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
      links: [
         {
            name: 'Repo Github',
            link: 'https://github.com/LionelVanS/LaPanthere',
            icon: <GithubIcon />,
         },
         {
            name: 'Visitez le site',
            link: 'https://lionelvans.github.io/LaPanthere/',
            icon: <WebIcon />,
         },
      ],
   },
   {
      id: 3,
      title: 'Kanap',
      logo: kanapLogo,
      image: kanapBackground,
      reason: "Projet d'école",
      link: 'project',
      deploy: '',
      date: '2022',
      duration: "Projet d'école",
      text: '',
      infos: [
         {
            data: 'exemple',
         },
         {
            data: '34 exemple',
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
      links: [
         {
            name: 'Repo Github',
            link: 'https://github.com/LionelVanS/Kanap',
            icon: <GithubIcon />,
         },
      ],
   },
   {
      id: 4,
      title: 'Piiquante',
      logo: piiquanteLogo,
      image: piiquanteBackground,
      reason: "Projet d'école",
      link: 'project',
      deploy: '',
      date: '2007',
      duration: "Projet d'école",
      text: '',
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
      links: [
         {
            name: 'Repo Github',
            link: 'https://github.com/LionelVanS/Piiquante',
            icon: <GithubIcon />,
         },
      ],
   },
   {
      id: 5,
      title: 'Groupomania',
      logo: groupomaniaLogo,
      image: groupomaniaBackground,
      reason: "Projet d'école",
      link: 'project',
      deploy: '',
      date: '2022',
      duration: "Projet d'école",
      text: '',
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
      links: [
         {
            name: 'Repo Github',
            link: 'https://github.com/LionelVanS/Groupomania',
            icon: <GithubIcon />,
         },
      ],
   },
   {
      id: 6,
      title: 'Portfolio',
      logo: portfolioLogo,
      image: portfolioBackground,
      reason: 'Projet personnel',
      link: 'project',
      deploy: '',
      date: '2022',
      duration: "Projet d'école",
      text: '',
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
      links: [
         {
            name: 'Repo Github',
            link: 'https://github.com/LionelVanS/amazing-prime-van-s',
            icon: <GithubIcon />,
         },
      ],
   },
];

export default portfolioSmallCardsData;
