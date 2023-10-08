import styled from 'styled-components';
import { useState } from 'react';
import { handleHover } from '@/utils/functions/handleHover';
import { devices, sizes } from '@/utils/style/breakpoints';
import DropDown from './DropDown/DropDown';
import CardLink from './CardLink/CardLink';

export default function Card({ data }) {
   // Contains data.title of hovered card
   const [openedCard, setOpenedCard] = useState(' ');

   // Contain string if card is too close to edge from right or left
   const [tooClose, setTooClose] = useState('');

   // Boolean to know which card is hovered and which is not
   const isHoveredCard = openedCard == data.title;

   return (
      <CardArticle
         onMouseOver={(e) =>
            handleHover(e, data, setOpenedCard, setTooClose, sizes)
         }
         onMouseOut={(e) =>
            handleHover(e, data, setOpenedCard, setTooClose, sizes)
         }
         isHoveredCard={isHoveredCard}
         tooClose={tooClose}
      >
         <CardLink data={data} isHoveredCard={isHoveredCard} />

         {
            // Open the card which is hovered
            isHoveredCard && <DropDown data={data} />
         }
      </CardArticle>
   );
}

const CardArticle = styled.article`
   width: 17.5vw;
   aspect-ratio: 16/9;
   position: relative;
   z-index: ${(props) => (props.isHoveredCard ? 2 : 1)};
   transform-origin: ${(props) =>
      props.tooClose == 'left'
         ? 'left'
         : props.tooClose == 'right'
         ? 'right'
         : 'center'};
   :hover {
      box-shadow: 0px 0px 21px rgba(0, 0, 0, 0.61);
      transition: transform 100ms 150ms ease-in;
      transform: scale(1.3);
   }

   @media ${devices.mobileL} {
      width: 30vw;
      :hover {
         transform: none;
         box-shadow: none;
      }
   }

   @media ${devices.mobileM} {
      width: 45vw;
   }

   @media ${devices.tablet} {
      width: 22vw;
      h3 {
         font-size: 1.5vw;
      }
   }
`;
