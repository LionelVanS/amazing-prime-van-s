// HANDLE NEXT BUTTON
export function handleNextClick(
   e,
   data,
   setdisplayedCards,
   displayedCards,
   setAnimationDirection,
   setAnimationKey,
   animationKey,
   numberOfCards
) {
   e.preventDefault();
   setAnimationDirection('left');
   setTimeout(() => {
      const nextItems = getNextCards(data, displayedCards, numberOfCards);
      setdisplayedCards(nextItems);
      setAnimationKey(animationKey + 1);
   }, 0);
}

// GET NEXT CARDS
function getNextCards(data, displayedCards, numberOfCards) {
   const lastCardId = displayedCards[displayedCards.length - 1].id;
   const remainingCards = data.filter((card) => card.id > lastCardId);

   return remainingCards.slice(0, numberOfCards);
}

// HANDLE PREVIOUS BUTTON
export function handlePreviousClick(
   e,
   data,
   setdisplayedCards,
   displayedCards,
   setAnimationDirection,
   setAnimationKey,
   animationKey,
   numberOfCards
) {
   e.preventDefault();
   setAnimationDirection('right');
   setTimeout(() => {
      const previousItems = getPreviousCards(
         data,
         displayedCards,
         numberOfCards
      );
      setdisplayedCards(previousItems);
      setAnimationKey(animationKey + 1);
   }, 0);
}

// GET PREVIOUS CARDS
function getPreviousCards(data, displayedCards, numberOfCards) {
   const firstCardId = displayedCards[0].id;
   const remainingCards = data.filter((card) => card.id < firstCardId);

   const startIndex = Math.max(0, remainingCards.length - numberOfCards);
   return remainingCards.slice(startIndex, startIndex + numberOfCards);
}
