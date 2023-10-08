export function getNumberOfCardsToShow(
   screenWidth,
   sizes,
   data,
   setdisplayedCards,
   setNumberOfCards
) {
   switch (true) {
      case screenWidth < sizes.mobileM:
         setdisplayedCards(data.slice(0, 2));
         setNumberOfCards(2);
         break;
      case screenWidth < sizes.mobileL:
         setdisplayedCards(data.slice(0, 3));
         setNumberOfCards(3);
         break;
      case screenWidth < sizes.tabletMax && screenWidth > sizes.tabletMin:
         setdisplayedCards(data.slice(0, 4));
         setNumberOfCards(4);
         break;
      default:
         setdisplayedCards(data.slice(0, 5));
         setNumberOfCards(5);
   }
}
