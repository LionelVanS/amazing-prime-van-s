import skillsBackground from '/public/images/home/smallCards/small-cards-skills.jpg';
import careerBackground from '/public/images/home/smallCards/small-cards-career.jpg';
import portfolioBackground from '/public/images/home/smallCards/small-cards-portfolio.jpg';

const smallCardsData = [
   {
      title: 'Le Parcours',
      background: careerBackground,
      header: 'Expériences incluses',
      link: '/career',
      date: '2007 - 2023',
      duration: '16 ans',
      text: "Lionel, 18 ans, se lance à la quête de sa vocation. Il est confronté à des choix difficiles, mais lorsqu'il commence à poursuivre ses rêves les enjeux changent. Malgré les nombreux obstacles, il est déterminé à devenir celui qu'il est destiné à être. Saura-t-il relever le défi ?",
   },
   {
      title: "L'Outil",
      background: skillsBackground,
      link: '/skills#technologies',
      header: 'Compétences incluses',
      date: '1989',
      duration: '34 ans',
      text: "Equipé d'un clavier, aucune technologie ne peut lui résister. Dans ce thriller haletant, Lionel doit choisir entre lire les docs ou scruter le net pour trouver des solutions ! Les erreurs de console ne sont pas le seul danger, d'autres développeurs sont également à la recherche du Graal...",
   },
   {
      title: 'Projets 2.0',
      background: portfolioBackground,
      header: 'Projets perso non inclus',
      link: '/portfolio',
      date: '2022',
      duration: '1 an',
      text: "Après le succès mondiale de son premier documentaire, notre artiste favoris de tous nous revient avec une série d'appli codé par lui Himself. Entre découverte du Javascript et portofolio avec NextJs, il continue de nous étonner ! Vivement le troisème opus !",
   },
];

export default smallCardsData;
