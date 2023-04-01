import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useState } from 'react';
import DropDownCards from './DropDownCards/DropDownCards';

export default function CardsContentWithHover({ data }) {
   const [openingCard, setOpeningCard] = useState(' ');
   const isHoveredCard = openingCard == data.title;

   return (
      <Content
         onMouseOver={() => setOpeningCard(data.title)}
         onMouseOut={() => setOpeningCard(' ')}
         isHovered={isHoveredCard}
      >
         <Link href={data.link}>
            <CardTitle></CardTitle>
            <Image
               src={data.background}
               alt="background"
               width="500"
               height="330"
            ></Image>
         </Link>
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
      :not(:hover) {
         transition: transform 50ms ease-in;
      }
      img {
         border-radius: 0.8rem 0.8rem 0 0;
      }
   }
   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.8rem;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: border-radius 100ms 150ms ease-in;
   }
`;

const CardTitle = styled.div`
   display: flex;
   justify-content: center;
   h3 {
      z-index: 2;
   }
`;
