import styled from 'styled-components';
import { useState, useEffect } from 'react';
import DropDown from './DropDown/DropDown';
import CardLink from './CardLink/CardLink';

export default function Card({ data }) {
   // Checking what card is hovered
   const [openingCard, setOpeningCard] = useState(' ');

   // Boolean to know if the card is hovered or not
   const isHoveredCard = openingCard == data.title;

   // Check if the link is an external link
   const [isExternalLink, setIsExternalLink] = useState();
   useEffect(() => {
      if (data.link.includes('http')) {
         setIsExternalLink(true);
      } else {
         setIsExternalLink(false);
      }
   }, [data.link]);

   return (
      <Content
         onMouseOver={() => setOpeningCard(data.title)}
         onMouseOut={() => setOpeningCard(' ')}
         isHovered={isHoveredCard}
      >
         <CardLink
            data={data}
            isHoveredCard={isHoveredCard}
            isExternalLink={isExternalLink}
         />
         {isHoveredCard ? (
            <DropDown data={data} isExternalLink={isExternalLink} />
         ) : (
            ''
         )}
      </Content>
   );
}

const Content = styled.article`
   width: 18vw;
   height: 10vw;
   margin: 0 0.5vw;
   position: relative;
   z-index: ${(props) => (props.isHovered ? 2 : 1)};
   :hover {
      transition: transform 100ms 150ms ease-in;
      transform: scale(1.3);
   }
`;
