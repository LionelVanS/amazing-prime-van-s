export function handleHover(e, data, setOpenedCard, setTooClose, sizes) {
   if (!data) return;

   const card = e.currentTarget;
   const cardPosition = card.getBoundingClientRect();
   const rightPosition = cardPosition.right;
   const leftPosition = cardPosition.left;
   const screenWidth = window.innerWidth;
   const maxPosition = 100;
   const mobile = screenWidth <= sizes.mobileL;

   switch (true) {
      case mobile:
         return;
      case e.type === 'mouseout':
         setOpenedCard(' ');
         setTooClose('');
         break;
      case e.type === 'mouseover' && leftPosition <= maxPosition:
         setTooClose('left');
         setOpenedCard(data.title);
         break;
      case e.type === 'mouseover' && rightPosition >= screenWidth - maxPosition:
         setTooClose('right');
         setOpenedCard(data.title);
         break;
      case e.type === 'mouseover':
         setTooClose('');
         setOpenedCard(data.title);
         break;
      default:
         return;
   }
}
