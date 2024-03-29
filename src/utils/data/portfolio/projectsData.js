// LOGOS
import ohmyfoodLogo from '/public/images/portfolio/projects/ohmyfood.png';
import lapanthereLogo from '/public/images/portfolio/projects/lapanthere.png';
import kanapLogo from '/public/images/portfolio/projects/kanap.png';
import piiquanteLogo from '/public/images/portfolio/projects/piiquante.png';
import groupomaniaLogo from '/public/images/portfolio/projects/groupomania.png';
import portfolioLogo from '/public/images/portfolio/projects/portfolio.png';
import vansWebLogo from '/public/images/portfolio/projects/van-s-web.png';

// HEROBANNER'S BACKGROUND
import ohmyfoodBackground from '/public/images/portfolio/projects/ohmyfood-background.jpg';
import laPanthereBackground from '/public/images/portfolio/projects/lapanthere-background.jpg';
import kanapBackground from '/public/images/portfolio/projects/kanap-background.jpg';
import piiquanteBackground from '/public/images/portfolio/projects/piiquante-background.jpg';
import groupomaniaBackground from '/public/images/portfolio/projects/groupomania-background.jpg';
import portfolioBackground from '/public/images/portfolio/projects/portfolio-background.jpg';
import vansWebBackground from '/public/images/portfolio/projects/vansweb-background.jpg';

// ICONS
import GithubIcon from '@/components/Icons/GithubIcon';
import WebIcon from '@/components/Icons/WebIcon';

const portfolioSmallCardsData = [
   {
      id: 1,
      title: 'Oh My Food',
      logo: ohmyfoodLogo,
      image: ohmyfoodBackground,
      header: 'Dynamiser un site web',
      link: 'project',
      date: '2022',
      reason: "Projet d'école",
      text: [
         {
            paraph:
               "Développeur junior dans une start-up qui souhaite s'imposer sur le marché de la restauration, je dois faire l'intégration du site en mobile-first, en respectant scrupuleusement la maquette. Les différentes animations me sont également imposées.",
         },
         {
            paraph:
               "Sur ce projet j'ai pu travailler avec le préprocesseur Sass. J'ai utilisé le nesting, couplé avec la méthode B.E.M., ce qui m'a facilité le travail. C'est aussi sur ce projet que j'ai découvert le gestionnaire de versions Git et ai appris les bases du versionnage en utilisant la plateforme Github.",
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
      header: 'Optimiser un site web',
      link: 'project',
      date: '2022',
      reason: "Projet d'école",
      text: [
         {
            paraph:
               "Après une réunion avec l'équipe, je suis chargé d'améliorer le référencement du site. Pour ce faire, je dois réaliser une analyse complète du site et y apporter des modifications. Je dois également améliorer l'accessibilité.",
         },
         {
            paraph:
               "Pour réaliser l'optimisation du site web, je commence par étudier le code, puis je lance des tests de performances sur Lighthouse et GTMetrix. Pour l'accessibilité j'utilise Wave. Grâce à ces outils je sais désormais quels sont les axes à améliorer. Ces tests et recherches révèlent une multitude d'erreurs de codage et de pratique black hat, une mauvaise sémantique et la liste peut devenir longue. Après modifications, le site est de meilleure qualité, et les performances sont au rendez-vous !",
         },
      ],
      infos: [
         {
            data: 'Notions importantes:',
         },
         {
            data: 'SEO',
         },
         {
            data: 'Accessibilité',
         },
         {
            data: 'Importance de la sémantique',
         },
      ],
      capacity: [
         {
            name: 'Technologies Utilisées :',
            data: 'Notions importantes:',
         },
         {
            name: 'HTML/CSS',
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
      header: 'Créer un site e-commerce',
      link: 'project',
      date: '2022',
      reason: "Projet d'école",
      text: [
         {
            paraph:
               "Le front-end et l'API m'étant fourni, ma mission pour ce projet est de construire la logique du site. Je dois coder la page principale présentant les canapés, la page produit affichant les détails et la logique du panier.",
         },
         {
            paraph:
               "Enfin ! Les choses sérieuses commencent, Javascript ! Le programme est chargé, premières requêtes fetch pour récupérer la liste des produits, puis des boucles et des conditions, pour afficher les informations voulues. Quelques requêtes à l'API Web Storage pour la persistance des données entre les pages, et pour finir quelques algorithmes pour calculer les prix selon les quantités et les références, et nous voici avec un site e-commerce (presque) fonctionnel ! ",
         },
      ],
      infos: [
         {
            data: 'Notions importantes:',
         },
         {
            data: 'Calls API',
         },
         {
            data: 'Logique Algorithmique',
         },
         {
            data: 'Boucles et Conditions',
         },
      ],
      capacity: [
         {
            name: 'Technologies Utilisées :',
         },
         {
            name: 'Javascript',
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
      header: 'Construire une API sécurisée',
      link: 'project',
      date: '2007',
      reason: "Projet d'école",
      text: [
         {
            paraph:
               "Après une discussion avec la cheffe de produit, j'accepte de créer le back-end de son site de partage de sauce piquante. Le front-end est fourni, je dois juste créer une API et la rendre la plus sécurisé possible. ",
         },
         {
            paraph:
               "Ma tâche consiste à implémenter une création de compte et une connexion pour la route utilisateur ainsi qu'un CRUD pour la route concernant les sauces. Une fonction de like/dislike doit aussi être présente. Ce projet m'a permis de comprendre le fonctionnement d'une API de l'intérieur en utilisant NodeJS et ExpressJS. J'ai aussi pu travailler avec une base de données en NoSQL et comprendre comment les données sont traitées lors des calls API. Un aspect intéressant a été de voir comment sécuriser une application et les données des utilisateurs.",
         },
      ],
      infos: [
         {
            data: 'Notions Importantes :',
         },
         {
            data: 'Sécurité des données',
         },
         {
            data: 'Fonctionnement du back-end',
         },
      ],
      capacity: [
         {
            name: 'Technologies Utilisées :',
         },
         {
            name: 'Javascript',
         },
         {
            name: 'NodeJS',
         },
         {
            name: 'Express',
         },
         {
            name: 'MongoDB Atlas',
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
      header: "Créer un réseau social d'entreprise",
      link: 'project',
      date: '2022',
      reason: "Projet d'école",
      text: [
         {
            paraph:
               "Après un brief avec le client, on me demande de produire une première version d'un réseau social d'entreprise. Pour ce projet, j'ai le champ libre, je ne suis limité que par l'identité graphique et quelques spécifications techniques.",
         },
         {
            paraph:
               "Pour réaliser ce projet je choisis les technologies que je souhaite utiliser, React pour le front-end, couplé avec Sass pour le style. Pour gagner du temps, j'utilise la bibliothèque Materials UI qui me permet d'avoir un design simple, mais rapide à créer. Côté back-end, j'utilise NodeJs avec une application Express et MongoDB pour la base de données, je connais déjà ces technologies, et je peux récupérer mon ancien projet et l'adapter à mes nouveaux besoins. Au programme, une route utilisateur permettant la création, la connexion et la modification de compte. Concernant les posts, j'ai implémenté un CRUD avec une fonction de like/dislike. Je dois également créer un compte administrateur pour gérer l'intégralité des posts du site.",
         },
      ],
      infos: [
         {
            data: 'Notions Importantes :',
         },
         {
            data: 'Frameworks',
         },
         {
            data: 'Materials UI',
         },
      ],
      capacity: [
         {
            name: 'Technologies Utilisées :',
         },
         {
            name: 'React',
         },
         {
            name: 'Sass',
         },
         {
            name: 'NodeJs/Express ',
         },
         {
            name: 'MongoDB',
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
      header: 'Créer mon portfolio',
      link: 'project',
      date: '2023',
      reason: 'Projet personnel',
      text: [
         {
            paraph:
               "Après ma formation, la suite logique est de trouver une première expérience afin d'assoir mes connaissances, mais pas question de rester sur mes acquis, je décide donc de continuer mon apprentissage et de me lancer un challenge...",
         },
         {
            paraph:
               "Pour réaliser ce projet, je n'ai utilisé que des technologies actuelles. Après avoir appris React, je me suis lancé le défi de créer une application NextJS. Le choix entre Tailwind CSS et Styled Components fut difficile, mais souhaitant de la flexibilité pour mon style, Styled Components en est sorti gagnant. Pour gérer les animations les plus complexes, je me suis tourné vers Framer Motion qui permet une meilleure compréhension et une meilleure maintenabilité.  ",
         },
      ],
      infos: [
         {
            data: 'Notions Importantes :',
         },
         {
            data: 'SSR/CSR',
         },
         {
            data: 'Lazy Loading',
         },
         {
            data: "Coût d'Opportunité",
         },
      ],
      capacity: [
         {
            name: 'Technologies Utilisées :',
         },
         {
            name: 'NextJS',
         },
         {
            name: 'Styled Components',
         },
         {
            name: 'Framer Motion',
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
   {
      id: 7,
      title: 'Van S Web',
      logo: vansWebLogo,
      image: vansWebBackground,
      header: 'Créer mon site',
      link: 'project',
      date: '2024',
      reason: 'Projet professionnel',
      text: [
         {
            paraph:
               "Mon premier site professionel. L'objectif de ce projet est de promouvoir mon travail et de trouver des clients. ",
         },
         {
            paraph: '',
         },
      ],
      infos: [
         {
            data: 'Notions Importantes :',
         },
         {
            data: 'SSR/CSR',
         },
         {
            data: 'Lazy Loading',
         },
         {
            data: "Coût d'Opportunité",
         },
      ],
      capacity: [
         {
            name: 'Technologies Utilisées :',
         },
         {
            name: 'NextJS',
         },
         {
            name: 'Styled Components',
         },
         {
            name: 'Framer Motion',
         },
         {
            name: 'Redux',
         },
      ],
      links: [
         {
            name: 'Visitez le site',
            link: 'https://lionelvans.com',
            icon: <WebIcon />,
         },
      ],
   },
];

export default portfolioSmallCardsData;
