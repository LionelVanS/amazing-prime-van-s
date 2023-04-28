export function handleScroll(setIsScroll) {
   function listenScroll() {
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
