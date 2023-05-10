import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import whiteRabbit from '/public/images/white-rabbit.png';

export default function ImageLink() {
   const linkApparition = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { delay: 8, duration: 1 },
   };

   return (
      <StyledLinkDiv {...linkApparition}>
         <Link href="/home">
            <Image
               src={whiteRabbit}
               alt="Visitez mon site portfolio"
               width="auto"
               height="auto"
               priority
            />
         </Link>
      </StyledLinkDiv>
   );
}

const StyledLinkDiv = styled(motion.div)`
   width: 100%;
   display: flex;
   justify-content: center;
   img {
      width: 4vw;
      height: 4vw;
      transition: transform 100ms ease-in-out;
      :hover {
         transform: scale(1.2);
      }
   }
`;
