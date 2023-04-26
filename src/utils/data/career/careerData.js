// LOGOS
import ghnd from '/public/images/career/logos/ghnd.png';
import vanSPhoto from '/public/images/career/logos/van-s-photo.png';
import celestin from '/public/images/career/logos/celestin.png';
import mPlus from '/public/images/career/logos/m+.png';
import dsSmith from '/public/images/career/logos/ds-smith.png';
import tecumseh from '/public/images/career/logos/tecumseh.png';
import nemera from '/public/images/career/logos/nemera.png';
import intermarche from '/public/images/career/logos/intermarche.png';
import votreLogo from '/public/images/career/logos/votre-logo.png';

// BACKGROUND
import ghndBg from '/public/images/career/background/ghnd.jpg';
import vanSPhotoBg from '/public/images/career/background/vans.jpg';
import celestinBg from '/public/images/career/background/celestin.jpg';
import mPlusBg from '/public/images/career/background/m+materiaux.jpg';
import dsSmithBg from '/public/images/career/background/dssmith.jpg';
import tecumsehBg from '/public/images/career/background/tecumseh.jpg';
import nemeraBg from '/public/images/career/background/nemera.jpg';
import intermarcheBg from '/public/images/career/background/intermarche.jpg';

// ICONS
import DownloadIcon from '@/components/Icons/DownloadIcon';
import WebIcon from '@/components/Icons/WebIcon';

const smallCardsData = [
   {
      id: 1,
      title: 'GHND',
      logo: ghnd,
      image: ghndBg,
      header: 'Gestionnaire - Responsable',
      link: 'experiences',
      date: '2011 - 2014',
      duration: '+ de 3 ans',
      text: [
         {
            paraph:
               "Au sein du centre hospitalier j'ai occupé plusieurs postes simultanément. J'ai débuté en tant qu'agent de quai, puis je suis devenu gestionnaire de stock, vaguemestre, responsable de parc automobile et manager.",
         },
         {
            paraph: '',
         },
      ],
      infos: [
         {
            data: 'Postes occupés:',
         },
         {
            data: 'Gestionnaire de Stock',
         },
         {
            data: 'Responsable parc Auto',
         },
         {
            data: 'Manager',
         },
      ],
      capacity: [
         {
            name: 'Compétences clés:',
         },
         {
            name: 'Gestion de délais',
         },
         {
            name: 'Gestion de budgets',
         },
         {
            name: 'Ecoute',
         },
      ],
      links: [
         {
            name: 'Télécharger mon CV',
            link: '/pdf/CV_Van_Schellebeck_Lionel_DéveloppeurWeb.pdf',
            icon: <DownloadIcon />,
         },
         {
            name: 'Visitez le site',
            link: 'https://ghnd.fr/',
            icon: <WebIcon />,
         },
      ],
   },
   {
      id: 2,
      title: 'Van S Photographie',
      logo: vanSPhoto,
      image: vanSPhotoBg,
      header: 'Photographe',
      link: 'experiences',
      date: '2008 - 2011',
      duration: '+ de 3 ans',
      text: [
         {
            paraph:
               "Depuis adolescent je rêvais de devenir un artiste et durant ces 3 ans je l'ai été. D'un côté j'étais photographe de portraits à mon compte, et d'un autre côté je travaillais avec plusieurs associations. Il m'arrivait fréquemment de couvrir des évènements comme des concerts. ",
         },
         {
            paraph: '',
         },
      ],
      infos: [
         {
            data: 'Poste Occupé:',
         },
         {
            data: 'Photgraphe de portraits',
         },
         {
            data: "Photographe d'évènementiels",
         },
      ],
      capacity: [
         {
            name: 'Compétences Clés:',
         },
         {
            name: 'Talent',
         },
         {
            name: 'SASS',
         },
         {
            name: 'Github',
         },
      ],
      links: [
         {
            name: 'Repo Github',
            link: 'https://github.com/LionelVanS/Ohmyfood',
            // icon: <GithubIcon />,
         },
         {
            name: 'Visitez le site',
            link: 'https://lionelvans.github.io/Ohmyfood/',
            // icon: <WebIcon />,
         },
      ],
   },
   {
      id: 3,
      title: 'Célestin Matériaux',
      logo: celestin,
      image: celestinBg,
      header: 'Magasinier Cariste',
      link: 'experiences',
      date: '2016',
      duration: '- de 1 ans',
      text: [
         {
            paraph:
               "Ce fût ma première expérience en tant que magasinier cariste. Mes tâches étaient de gérer la bonne tenue d'un parc de matériaux de construction, servir et renseigner la clientèle, ainsi qu'optimiser le parc afin d'améliorer les temps de service au client. ",
         },
         {
            paraph: '',
         },
      ],
      infos: [
         {
            data: 'Notions importantes:',
         },
         {
            data: 'Animations CSS',
         },
         {
            data: 'Versionnage',
         },
      ],
      capacity: [
         {
            name: 'Technologies Utilisées :',
         },
         {
            name: 'HTML/CSS',
         },
         {
            name: 'SASS',
         },
         {
            name: 'Github',
         },
      ],
      links: [
         {
            name: 'Repo Github',
            link: 'https://github.com/LionelVanS/Ohmyfood',
            // icon: <GithubIcon />,
         },
         {
            name: 'Visitez le site',
            link: 'https://lionelvans.github.io/Ohmyfood/',
            // icon: <WebIcon />,
         },
      ],
   },
   {
      id: 4,
      title: 'M+ Matériaux',
      logo: mPlus,
      image: mPlusBg,
      header: 'Magasinier Cariste',
      link: 'experiences',
      date: '2017',
      duration: '- de 1 an',
      text: [
         {
            paraph:
               "Ma seconde expérience en tant que magasinier cariste était similaire à ma première. Mes tâches étaient de gérer la bonne tenue d'un parc de matériaux de construction, servir et renseigner la clientèle, ainsi qu'optimiser le parc afin d'améliorer les temps de service au client. ",
         },
         {
            paraph: '',
         },
      ],
      infos: [
         {
            data: 'Notions importantes:',
         },
         {
            data: 'Animations CSS',
         },
         {
            data: 'Versionnage',
         },
      ],
      capacity: [
         {
            name: 'Technologies Utilisées :',
         },
         {
            name: 'HTML/CSS',
         },
         {
            name: 'SASS',
         },
         {
            name: 'Github',
         },
      ],
      links: [
         {
            name: 'Repo Github',
            link: 'https://github.com/LionelVanS/Ohmyfood',
            // icon: <GithubIcon />,
         },
         {
            name: 'Visitez le site',
            link: 'https://lionelvans.github.io/Ohmyfood/',
            // icon: <WebIcon />,
         },
      ],
   },
   {
      id: 5,
      title: 'DS Smith',
      logo: dsSmith,
      image: dsSmithBg,
      header: 'Cariste Approvisionneur',
      link: 'experiences',
      date: '2018',
      duration: '- de 1 an',
      text: [
         {
            paraph:
               "Cet emploi de nuit était assez intéressant. Mon rôle était d'approvisionner des machines de pliage en matière première. Cela nécessitait une parfaite gestion de son temps pour maintenir une production constante.",
         },
         {
            paraph: '',
         },
      ],
      infos: [
         {
            data: 'Notions importantes:',
         },
         {
            data: 'Animations CSS',
         },
         {
            data: 'Versionnage',
         },
      ],
      capacity: [
         {
            name: 'Technologies Utilisées :',
         },
         {
            name: 'HTML/CSS',
         },
         {
            name: 'SASS',
         },
         {
            name: 'Github',
         },
      ],
      links: [
         {
            name: 'Repo Github',
            link: 'https://github.com/LionelVanS/Ohmyfood',
            // icon: <GithubIcon />,
         },
         {
            name: 'Visitez le site',
            link: 'https://lionelvans.github.io/Ohmyfood/',
            // icon: <WebIcon />,
         },
      ],
   },
   {
      id: 6,
      title: 'Tecumseh',
      logo: tecumseh,
      image: tecumsehBg,
      header: 'Agent de quai - Magasinier Cariste',
      link: 'experiences',
      date: '2018',
      duration: '- de 1 an',
      text: [
         {
            paraph:
               "Au sein de la section de production de groupe de condensation, mon rôle principale était de réceptionner et de ranger les matières premières. J'ai pris l'initiative d'optimiser l'espace de stockage pour garantir un meilleur flux et une meilleure circulation des caristes.",
         },
         {
            paraph: '',
         },
      ],
      infos: [
         {
            data: 'Notions importantes:',
         },
         {
            data: 'Animations CSS',
         },
         {
            data: 'Versionnage',
         },
      ],
      capacity: [
         {
            name: 'Technologies Utilisées :',
         },
         {
            name: 'HTML/CSS',
         },
         {
            name: 'SASS',
         },
         {
            name: 'Github',
         },
      ],
      links: [
         {
            name: 'Repo Github',
            link: 'https://github.com/LionelVanS/Ohmyfood',
            // icon: <GithubIcon />,
         },
         {
            name: 'Visitez le site',
            link: 'https://lionelvans.github.io/Ohmyfood/',
            // icon: <WebIcon />,
         },
      ],
   },
   {
      id: 7,
      title: 'Nemera',
      logo: nemera,
      image: nemeraBg,
      header: 'Cariste Approvisionneur',
      link: 'experiences',
      date: '2018 - 2019',
      duration: '- de 1 an',
      text: [
         {
            paraph:
               "Au sein de l'entreprise leader de la plasturgie médicale, j'étais chargé d'approvisionner les différents laboratoire en matière première, et de récupérer l'intégralité de leur production pour une expédition ultérieur.",
         },
         {
            paraph: '',
         },
      ],
      infos: [
         {
            data: 'Notions importantes:',
         },
         {
            data: 'Animations CSS',
         },
         {
            data: 'Versionnage',
         },
      ],
      capacity: [
         {
            name: 'Technologies Utilisées :',
         },
         {
            name: 'HTML/CSS',
         },
         {
            name: 'SASS',
         },
         {
            name: 'Github',
         },
      ],
      links: [
         {
            name: 'Repo Github',
            link: 'https://github.com/LionelVanS/Ohmyfood',
            // icon: <GithubIcon />,
         },
         {
            name: 'Visitez le site',
            link: 'https://lionelvans.github.io/Ohmyfood/',
            // icon: <WebIcon />,
         },
      ],
   },
   {
      id: 8,
      title: 'Intermarché',
      logo: intermarche,
      image: intermarcheBg,
      header: 'Cariste Approvisionneur',
      link: 'experiences',
      date: '2022',
      duration: '+ de 1 an',
      text: [
         {
            paraph:
               "Intégrer à l'entrepôt Intermarché, je devais gérer l'approvisionnement des différents espaces de préparation en produits afin d'assurer une préparation constante. De plus je devais être en mesure de me rendre disponible en cas d'avarie de produits. ",
         },
         {
            paraph: '',
         },
      ],
      infos: [
         {
            data: 'Notions importantes:',
         },
         {
            data: 'Animations CSS',
         },
         {
            data: 'Versionnage',
         },
      ],
      capacity: [
         {
            name: 'Technologies Utilisées :',
         },
         {
            name: 'HTML/CSS',
         },
         {
            name: 'SASS',
         },
         {
            name: 'Github',
         },
      ],
      links: [
         {
            name: 'Repo Github',
            link: 'https://github.com/LionelVanS/Ohmyfood',
            // icon: <GithubIcon />,
         },
         {
            name: 'Visitez le site',
            link: 'https://lionelvans.github.io/Ohmyfood/',
            // icon: <WebIcon />,
         },
      ],
   },
   {
      id: 9,
      title: 'Votre Entreprise',
      logo: votreLogo,
      header: 'Développeur Web Front-End',
      link: '',
      date: '2023 - ...',
      duration: 'Au moins 2 ans',

      text: [
         {
            paraph:
               'Vous pouvez facilement obtenir votre place dans cette rubrique ! Ne restez pas spectateur de ma réussite !',
         },
         {
            paraph: '',
         },
      ],
   },
];

export default smallCardsData;
