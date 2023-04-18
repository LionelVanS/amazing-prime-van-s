import styled from 'styled-components';
import { useState } from 'react';
import DropDown from './DropDown/DropDown';
import CardLink from './CardLink/CardLink';

export default function Card({ data }) {
   // Contains data.title of hovered card
   const [openingCard, setOpeningCard] = useState(' ');

   // Boolean to know which card is hovered and which is not
   const isHoveredCard = openingCard == data.title;

   return (
      <ContentArticle
         onMouseOver={() => setOpeningCard(data.title)}
         onMouseOut={() => setOpeningCard(' ')}
         isHoveredCard={isHoveredCard}
      >
         <CardLink data={data} isHoveredCard={isHoveredCard} />
         {
            // Drop the card which is hovered
            isHoveredCard ? <DropDown data={data} /> : ''
         }
      </ContentArticle>
   );
}

const ContentArticle = styled.article`
   width: 18vw;
   height: 10vw;
   margin: 0 0.5vw;
   position: relative;
   z-index: ${(props) => (props.isHoveredCard ? 2 : 1)};
   :hover {
      box-shadow: 0px 0px 21px rgba(0, 0, 0, 0.61);
      transition: transform 100ms 150ms ease-in;
      transform: scale(1.3);
   }
`;
