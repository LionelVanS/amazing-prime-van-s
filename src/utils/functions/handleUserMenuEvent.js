export function handleUserMenuEvent(e, userMenuProps) {
   const {
      screenWidth,
      sizes,
      setUserMenuIsHovered,
      setUserMenuIsClicked,
      userMenuIsClicked,
      userMenuIsHovered,
   } = userMenuProps;

   const type = e.type;
   const mobile = screenWidth <= sizes.mobileL;
   const tabletScreenSize =
      screenWidth <= sizes.tabletMax && screenWidth >= sizes.tabletMin;
   const desktop = screenWidth >= sizes.desktop;
   const tabletDevice =
      /iPad|Android/.test(navigator.userAgent) && !window.MSStream;

   switch (true) {
      case type == ('mouseenter' || 'mouseleave') && (mobile || tabletDevice):
         return;
      case type == 'mouseenter' && (tabletScreenSize || desktop):
         setUserMenuIsHovered(!userMenuIsHovered);
         break;
      case type == 'mouseleave' && (tabletScreenSize || desktop):
         setUserMenuIsHovered(!userMenuIsHovered);
         break;
      case type == 'click' && (mobile || tabletDevice):
         setUserMenuIsClicked(!userMenuIsClicked);
         break;
      default:
         return;
   }
}
