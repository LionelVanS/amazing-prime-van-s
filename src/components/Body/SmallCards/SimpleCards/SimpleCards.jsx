import styled from 'styled-components';
import BackgroundImage from '../BackgroundImage/BackgroundImage';

export default function SimpleCards({ data }) {
   return (
      <Content>
         <h3>{data.title}</h3>
         <ContentBackgroundDiv>
            <BackgroundImage data={data} />
         </ContentBackgroundDiv>
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
      z-index: 1;
   }
`;

const ContentBackgroundDiv = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   img {
      width: 100%;
      height: 100%;
   }
`;
