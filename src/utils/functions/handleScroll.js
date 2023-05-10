export function handleScroll(setIsScroll, screenWidth, sizes) {
   function listenScroll() {
      if (screenWidth < sizes.mobileL) {
         setIsScroll(false);
         return;
      }

      if (window.scrollY > 0) {
         setIsScroll(true);
      } else {
         setIsScroll(false);
      }
   }
   window.addEventListener('scroll', listenScroll);

   return () => {
      window.removeEventListener('scroll', listenScroll);
   };
}
