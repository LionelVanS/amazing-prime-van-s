export function getActiveLink(router, pathname) {
   if (pathname === '/') {
      return router.pathname === '/';
   } else {
      return router.pathname.startsWith(pathname);
   }
}
