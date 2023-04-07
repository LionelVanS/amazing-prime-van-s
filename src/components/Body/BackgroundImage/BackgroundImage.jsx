import Image from 'next/image';
import styled from 'styled-components';

export default function BackgroundImage({ data, isHoveredCard }) {
   const image = data.background ? data.background : data.logo;
   return (
      <ImageDiv background={data.background} isHoveredCard={isHoveredCard}>
         <Image
            src={image}
            alt={data.title}
            height="500"
            width="768"
            priority
         />
      </ImageDiv>
   );
}

const ImageDiv = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   overflow: hidden;
   transition: border-radius 100ms ease-in;
   border-radius: ${(props) =>
      props.isHoveredCard ? '0.8rem 0.8rem 0 0' : '0.8rem'};
   background-color: ${(props) => (props.background ? '' : '#fff')};
   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`;
