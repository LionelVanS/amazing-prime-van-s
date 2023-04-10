import { useLargeCard } from '@/utils/context/largeCard';
import { colors } from '@/utils/style/colors';
import Image from 'next/image';
import styled from 'styled-components';

export default function Background() {
   const datas = useLargeCard();
   const background = datas.image;
   return (
      <BackgroundDiv>
         <OverlayDiv />
         <Image
            src={background}
            alt="background"
            width="1469"
            height="979"
            priority
         />
      </BackgroundDiv>
   );
}

const BackgroundDiv = styled.div`
   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
   }
`;

const OverlayDiv = styled.div`
   width: 75%;
   height: 100%;
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   z-index: 1;
   background: linear-gradient(
      to right,
      ${colors.appBackground},
      75%,
      transparent
   );
`;
