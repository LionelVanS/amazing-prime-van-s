import styled from 'styled-components';
import BackgroundImage from '../BackgroundImage/BackgroundImage';

export default function SimpleCard({ datas }) {
   const cardData = datas.datas;
   return (
      <>
         {cardData.map((data, index) => (
            <ContentArticle key={index}>
               <h3>{data.title}</h3>
               <BackgroundImage data={data} />
            </ContentArticle>
         ))}
      </>
   );
}

const ContentArticle = styled.article`
   width: 17.5vw;
   height: 10vw;
   display: flex;
   flex-flow: row wrap;
   align-items: center;
   padding-left: 1vw;
   border-radius: 0.8vw;
   position: relative;
   overflow: hidden;
   h3 {
      font-size: 1vw;
      z-index: 1;
   }
`;
