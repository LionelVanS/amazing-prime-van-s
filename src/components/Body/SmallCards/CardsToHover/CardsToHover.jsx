import styled from 'styled-components';
import { useState } from 'react';
import DropDownCards from './DropDownCards/DropDownCards';
import CardLink from './CardLink/CardLink';

export default function CardsToHover({ data }) {
   const [openingCard, setOpeningCard] = useState(' ');
   const isHoveredCard = openingCard == data.title;

   return (
      <Content
         onMouseOver={() => setOpeningCard(data.title)}
         onMouseOut={() => setOpeningCard(' ')}
         isHovered={isHoveredCard}
      >
         <BackgroundDiv isHovered={isHoveredCard}>
            <CardLink data={data} />
         </BackgroundDiv>
         {isHoveredCard ? <DropDownCards data={data} /> : ''}
      </Content>
   );
}

const Content = styled.article`
   width: 100%;
   height: 100%;
   padding: 1rem;
   cursor: pointer;
   position: relative;
   z-index: ${(props) => (props.isHovered ? 2 : 1)};
   :hover {
      transition: transform 100ms 150ms ease-in;
      transform: scale(1.3);
   }
`;

const BackgroundDiv = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   overflow: hidden;
   transition: border-radius 100ms ease-in;
   border-radius: ${(props) =>
      props.isHovered ? '0.8rem 0.8rem 0 0' : '0.8rem'};
   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`;
