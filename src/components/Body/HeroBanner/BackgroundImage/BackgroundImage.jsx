// LIBS
import Image from 'next/image';
import styled from 'styled-components';

// EXPORTED COMPONENT
export default function BackgroundImage({ image }) {
   return (
      <ImageDiv>
         <Image src={image} alt="background" width="2500" height="1667" />
      </ImageDiv>
   );
}

// STYLES
const ImageDiv = styled.div`
   position: absolute;
   right: 0;
   bottom: -50px;
   left: 0;
   img {
      width: 100%;
      height: 100%;
   }
`;
