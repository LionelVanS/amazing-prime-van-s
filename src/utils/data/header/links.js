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
            name: 'Formation',
            path: '/career/formation',
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

export default links;
