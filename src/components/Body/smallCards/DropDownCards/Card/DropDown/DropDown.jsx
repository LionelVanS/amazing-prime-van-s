import styled from 'styled-components';
import { motion } from 'framer-motion';

import CardsContent from './CardsContent/CardsContent';
import CardsHeader from './CardsHeader/CardsHeader';
import CardsAbout from './CardsAbout/CardsAbout';

export default function DropDownCards({ data }) {
   if (!data) return;
   return (
      <>
         <DropDownDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.1 }}
         >
            <CardsHeader data={data} />
            <CardsAbout data={data} />
            <CardsContent data={data} />
         </DropDownDiv>
      </>
   );
}

const DropDownDiv = styled(motion.div)`
   height: 17vw;
   padding: 0.5vw 1vw;
   position: absolute;
   left: 0;
   right: 0;
   bottom: -17vw;
   border-radius: 0 0 0.8vw 0.8vw;
   background-color: #000;
   cursor: auto;
   p {
      font-weight: 700;
   }
`;
