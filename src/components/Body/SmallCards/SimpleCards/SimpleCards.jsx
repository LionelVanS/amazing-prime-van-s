import Image from 'next/image';
import styled from 'styled-components';

export default function SimpleCards({ data }) {
   return (
      <Content>
         <h3>{data.title}</h3>
         <Image src={data.image} alt={data.title} width="768" height="768" />
      </Content>
   );
}

const Content = styled.article`
   width: 100%;
   height: 100%;
   background-color: #fff;
   display: flex;
   align-items: center;
   padding-left: 1vw;
   border-radius: 0.8rem;
   position: relative;
   overflow: hidden;
   h3 {
      font-size: 1vw;
      color: white;
      z-index: 1;
   }
   img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
   }
`;
