export const sizes = {
   mobileM: 680,
   mobileL: 880,
   tabletMin: 881,
   tabletMax: 1399,
   desktop: 1400,
   desktopL: 1800,
};

export const devices = {
   mobileM: `(max-width: ${sizes.mobileM}px)`,
   mobileL: `(max-width: ${sizes.mobileL}px)`,
   tablet: `(min-width: ${sizes.tabletMin}px) and (max-width: ${sizes.tabletMax}px)`,
   desktop: `(min-width: ${sizes.desktop}px)`,
   desktopL: `(min-width: ${sizes.desktopL}px)`,
};
