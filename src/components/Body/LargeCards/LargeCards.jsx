import { colors } from '@/utils/style/colors';
import Image from 'next/image';
import styled from 'styled-components';

export default function LargeCards() {
   return (
      <>
         <CardsSection>
            <h1>MON PROFIL</h1>
            <BackgroundOverlayDiv />
            <Image
               src="/../public/images/profil-large-card.jpg"
               alt="background"
               width="4896"
               height="3264"
            />
         </CardsSection>
      </>
   );
}

const CardsSection = styled.section`
   width: 100%;
   height: 93vh;
   padding: 9.5vw 0 0 4vw;
   position: relative;
   img {
      background: linear-gradient(to right, transparent);
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;
   }
`;

const BackgroundOverlayDiv = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   width: 75%;
   height: 100%;
   background: linear-gradient(
      to right,
      ${colors.appBackground},
      60%,
      transparent
   );
   z-index: 1;
`;
