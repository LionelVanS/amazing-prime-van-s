import { createContext, useContext } from 'react';

const HeroBannerContext = createContext();

// PROVIDER
function HeroBannerProvider(props) {
   const { heroBannerData, children } = props;
   return (
      <HeroBannerContext.Provider value={heroBannerData}>
         {children}
      </HeroBannerContext.Provider>
   );
}

// HOOK FOR CONTEXT
function useHeroBanner() {
   return useContext(HeroBannerContext);
}

export { HeroBannerProvider, useHeroBanner };
