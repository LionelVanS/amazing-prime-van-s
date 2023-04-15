const links = [
   // HOMEPAGE
   {
      name: 'Accueil',
      path: '/home',
      subNav: [
         {
            name: 'Profil',
            path: '/home/profil',
         },
      ],
   },

   // CAREER PAGE
   {
      name: 'Parcours',
      path: '/career',
      subNav: [
         {
            name: 'Expériences',
            path: '/career#experiences',
         },
         {
            name: 'Formations',
            path: '/career#formations',
         },
      ],
   },

   // SKILLS PAGE
   {
      name: 'Compétences',
      path: '/skills',
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
   },
];

module.exports = links;
