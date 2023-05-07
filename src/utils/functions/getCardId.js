export function checkIfLastCard(data, displayedCards, setIsLastCard) {
   if (displayedCards.length > 0) {
      const lastDisplayedCard = displayedCards[displayedCards.length - 1].id;
      const lastDataItem = data[data.length - 1].id;

      setIsLastCard(lastDisplayedCard === lastDataItem);
   }
}

export function checkIfFirstCard(data, displayedCards, setIsFirstCard) {
   if (displayedCards.length > 0) {
      const firstDisplayedCard = displayedCards[0].id;
      const firstDataItem = data[0].id;

      setIsFirstCard(firstDisplayedCard === firstDataItem);
   }
}
