import styled from 'styled-components';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import { devices } from '@/utils/style/breakpoints';

export default function SimpleCard({ data }) {
   const cardData = data.data;
   return (
      <>
         {cardData.map((data, index) => (
            <CardArticle key={index}>
               <h3>{data.title}</h3>
               <BackgroundImage data={data} />
            </CardArticle>
         ))}
      </>
   );
}

const CardArticle = styled.article`
   aspect-ratio: 16/9;
   display: flex;
   align-items: center;
   padding-left: 1vw;
   border-radius: 0.8vw;
   position: relative;
   h3 {
      font-size: 1vw;
      z-index: 1;
   }
   @media ${devices.tablet} {
      h3 {
         font-size: 1.5vw;
      }
   }
   @media ${devices.mobileL} {
      h3 {
         font-size: 2vw;
      }
   }
   @media ${devices.mobileM} {
      h3 {
         font-size: 3vw;
      }
   }
`;
