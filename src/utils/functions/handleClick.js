export function handleClick(e, router, data) {
   e.preventDefault();

   switch (true) {
      case data.link.includes('/portfolio/'):
         router.push(`/portfolio/${data.id}`);
         break;

      case data.link.includes('http'):
         window.open(data.link, '_blank', 'noopener,noreferrer');
         break;

      default:
         router.push(data.link);
   }
}