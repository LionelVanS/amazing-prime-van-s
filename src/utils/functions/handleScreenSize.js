export function handleScreenSizeChanges(setScreenWidth) {
   function handleSizeEvent() {
      setScreenWidth(window.innerWidth);
   }

   window.addEventListener('resize', handleSizeEvent);

   return () => {
      window.removeEventListener('resize', handleSizeEvent);
   };
}
