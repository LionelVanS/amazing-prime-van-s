export const sizes = {
   mobileM: '448px',
   mobileL: '880px',
   tabletMin: '881px',
   tabletMax: '1399px',
   desktop: '1400px',
   desktopL: '1800px',
};

export const devices = {
   mobileM: `(max-width: ${sizes.mobileM})`,
   mobileL: `(max-width: ${sizes.mobileL})`,
   tablet: `(min-width: ${sizes.tabletMin}) and (max-width: ${sizes.tabletMax})`,
   desktop: `(min-width: ${sizes.desktop})`,
   desktopL: `(min-width: ${sizes.desktopL})`,
};
