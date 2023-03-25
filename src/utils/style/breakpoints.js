const sizes = {
   mobileM: '448px',
   mobileL: '880px',
   tablet: '1400px',
   desktopL: '1800px',
};

export const devices = {
   mobileM: `(max-width: ${sizes.mobileM})`,
   mobileL: `(max-width: ${sizes.mobileL})`,
   tablet: `(max-width: ${sizes.tablet})`,
   desktopL: `(min-width: ${sizes.desktopL})`,
};
