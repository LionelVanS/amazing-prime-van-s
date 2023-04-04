import styled from 'styled-components';
import Titles from './Titles/Titles';
import AboutTech from './AboutTech/AboutTech';
import AboutLink from './AboutLink/AboutLink';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import { useHeroBanner } from '@/utils/context/HeroBanner';

export default function HeroBanner() {
   const datas = useHeroBanner();
   console.log(datas);
   return (
      <>
         <HeroBannerSection>
            <TitleDiv>
               <Titles />
            </TitleDiv>
            <AboutDiv>
               <AboutTech />
               <AboutLink />
            </AboutDiv>
            <BackgroundDiv>
               <BackgroundImage />
            </BackgroundDiv>
         </HeroBannerSection>
      </>
   );
}

const HeroBannerSection = styled.section`
   height: 31vw;
   padding-left: 3.5vw;
   border-radius: 0.5rem;
   overflow: hidden;
   position: relative;
`;

const TitleDiv = styled.div`
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
