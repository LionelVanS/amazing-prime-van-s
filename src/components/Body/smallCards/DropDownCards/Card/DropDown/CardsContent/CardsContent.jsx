import styled from 'styled-components';

import { colors } from '@/utils/style/colors';
import ContentTime from './ContentTime/ContentTime';
import { useEffect, useState } from 'react';

export default function DropDownCardsContent({ data }) {
   const [text, setText] = useState();

   // Data.text can only contain a text or an array of two objects
   // If data.text contain an array, it display the first object in it
   useEffect(() => {
      const text = data.text;
      let tempText;

      switch (text.length) {
         case 2:
            tempText = text[0].paraph;
            break;
         default:
            tempText = text;
      }
      console.log(tempText.length);

      // If the text has more than 290 characters, it will be croped
      if (tempText.length > 290) {
         tempText = tempText.substring(0, 287) + '...';
      }

      setText(tempText);
   }, [data]);

   return (
      <ContentDiv>
         <h3> {data.title} </h3>
         <ContentTime data={data} />
         <p> {text} </p>
      </ContentDiv>
   );
}

const ContentDiv = styled.div`
   display: flex;
   flex-flow: column;
   margin: 0.5vw 0;
   h3 {
      font-size: 1vw;
      margin: 0;
   }
   p {
      font-size: 0.8vw;
      color: ${colors.text};
   }
`;
