// Handle click on previous's cards button
export function previousCards(e, currentPosition, setCurrentPosition) {
   e.preventDefault;
   if (currentPosition == 0) {
      return;
   }
   setCurrentPosition(0);
}

// Handle click on next's cards button
export function nextCards(e, currentPosition, setCurrentPosition) {
   const endOfSLides = -78;
   e.preventDefault();
   if (currentPosition == endOfSLides) {
      return;
   }
   setCurrentPosition(endOfSLides);
}
