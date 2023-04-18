import styled from 'styled-components';
import Titles from './Titles/Titles';
import AboutTech from './AboutTech/AboutTech';
import AboutLink from './AboutLink/AboutLink';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import { motion } from 'framer-motion';

export default function HeroBanner() {
   return (
      <>
         <HeroBannerSection>
            <TitleDiv
               initial={largeSlideAnimation.initial}
               animate={largeSlideAnimation.animate}
               transition={largeAnimationDuration}
            >
               <Titles />
            </TitleDiv>

            <AboutDiv>
               <motion.div
                  initial={smallSlideAnimation.initial}
                  animate={smallSlideAnimation.animate}
                  transition={smallAnimationDuration}
               >
                  <AboutTech />
               </motion.div>

               <motion.div
                  initial={largeSlideAnimation.initial}
                  animate={largeSlideAnimation.animate}
                  transition={largeAnimationDuration}
               >
                  <AboutLink />
               </motion.div>
            </AboutDiv>

            <BackgroundDiv>
               <BackgroundImage />
            </BackgroundDiv>
         </HeroBannerSection>
      </>
   );
}

// DURATION OF ANIMATION
const largeAnimationDuration = {
   transition: { duration: 2, ease: [0.25, 0.46, 0.45, 0.94] },
};
const smallAnimationDuration = {
   transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
};

// SLIDE ANIMATION
const largeSlideAnimation = {
   initial: { opacity: 0, y: 200 },
   animate: { opacity: 1, y: 0 },
};

const smallSlideAnimation = {
   initial: { opacity: 0, y: 100 },
   animate: { opacity: 1, y: 0 },
};

// GLOBAL STYLE
const HeroBannerSection = styled.section`
   height: 31vw;
   padding-left: 3.5vw;
   margin: 0 3.5vw;
   border-radius: 0.5vw;
   overflow: hidden;
   position: relative;
`;

const TitleDiv = styled(motion.div)`
   z-index: 1;
   position: absolute;
   top: 4vw;
`;

const AboutDiv = styled.div`
   z-index: 1;
   position: absolute;
   bottom: 6vw;
`;

const BackgroundDiv = styled.div`
   position: absolute;
   right: 0;
   bottom: -50px;
   left: 0;
   img {
      width: 100%;
      height: 100%;
   }
`;
