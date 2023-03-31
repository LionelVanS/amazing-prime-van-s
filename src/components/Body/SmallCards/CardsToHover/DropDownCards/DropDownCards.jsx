// LIBS
import styled from 'styled-components';
import { motion } from 'framer-motion';

// IMPORTED COMPONENT
import DropDownCardsContent from './DropDownCardsContent/DropDownCardsContent';
import DropDownCardsHeader from './DropDownCardsHeader/DropDownCardsHeader';
import DropDownCardsResume from './DropDownCardsResume/DropDownCardsResume';

// EXPORTED COMPONENT
export default function DropDownCards({ data }) {
   if (!data) {
      return;
   }
   return (
      <>
         <DropDownDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.1 }}
         >
            <DropDownCardsHeader data={data} />
            <DropDownCardsResume data={data} />
            <DropDownCardsContent data={data} />
         </DropDownDiv>
      </>
   );
}

// STYLES
const DropDownDiv = styled(motion.div)`
   height: 17vw;
   padding: 1.5vw;
   position: absolute;
   left: 0;
   right: 0;
   bottom: -17vw;
   border-radius: 0 0 0.8rem 0.8rem;
   background-color: #000;
   cursor: auto;
   p {
      font-weight: bold;
   }
`;
