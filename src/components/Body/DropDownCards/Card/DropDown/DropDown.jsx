import styled from 'styled-components';
import { motion } from 'framer-motion';

import CardsContent from './CardsContent/CardsContent';
import CardsHeader from './CardsHeader/CardsHeader';
import CardsResume from './CardsResume/CardsResume';

export default function DropDownCards({ data, isExternalLink }) {
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
            <CardsHeader />
            <CardsResume data={data} isExternalLink={isExternalLink} />
            <CardsContent data={data} />
         </DropDownDiv>
      </>
   );
}

const DropDownDiv = styled(motion.div)`
   height: 17vw;
   padding: 0.5vw 1.5vw;
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
