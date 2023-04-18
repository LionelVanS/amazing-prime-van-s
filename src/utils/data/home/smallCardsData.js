import skillsBackground from '/public/images/home/smallCards/small-cards-skills.jpg';
import careerBackground from '/public/images/home/smallCards/small-cards-career.jpg';
import portfolioBackground from '/public/images/home/smallCards/small-cards-portfolio.jpg';

const smallCardsData = [
   {
      title: 'Le Parcours',
      background: careerBackground,
      include: 'Expériences incluses',
      link: '/career#experiences',
      date: '2007',
      duration: '16 ans',
      text: "Au début de sa carrière, Lionel, un jeune homme plein de vitalité, cherche sa place dans ce monde. Entre métiers du BTP, logistique et ses propres rêves, il devra affronter bien des dangers pour devenir celui qu'il est supposer être. Saura-t-il relevé le défi ?",
   },
   {
      title: "L'Outil",
      background: skillsBackground,
      link: '/skills#technologies',
      include: 'Compétences incluses',
      date: '1989',
      duration: '34 ans',
      text: 'Une hache pour seul outil, aucune technologie ne saurait lui résister. Sa cible, la réussite.',
   },
   {
      title: 'Projets 2.0',
      background: portfolioBackground,
      include: 'Projets perso non inclus',
      link: '/portfolio',
      date: '2022',
      duration: '1 an',
      text: "Découvrez la suite tant attendu du premier épisode, succès mondial en Isère, mais censuré en moins de 24h. Aujourdhui, notre artiste favoris de tous nous revient avec une série d'appli codé par lui Himself. ",
   },
];

export default smallCardsData;
