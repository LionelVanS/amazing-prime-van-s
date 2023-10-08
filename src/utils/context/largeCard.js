import { createContext, useContext } from 'react';

const LargeCardContext = createContext();

// PROVIDER
function LargeCardProvider(props) {
   const { largeCardData, children } = props;
   return (
      <LargeCardContext.Provider value={largeCardData}>
         {children}
      </LargeCardContext.Provider>
   );
}

// HOOK FOR CONTEXT
function useLargeCard() {
   return useContext(LargeCardContext);
}

export { LargeCardProvider, useLargeCard };
