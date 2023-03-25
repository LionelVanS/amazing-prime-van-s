// LIBS
import styled from 'styled-components';

// IMPORTED COMPONENTS
import Titles from './Titles/Titles';
import AboutTech from './AboutTech/AboutTech';
import AboutLink from './AboutLink/AboutLink';
import BackgroundImage from './BackgroundImage/BackgroundImage';

// EXPORTED COMPONENT
export default function HeroBanner({ data }) {
   if (!data) {
      return;
   }

   const { title, secondPartTitle, subtitle, technologies, image, link } = data;

   return (
      <>
         <ContainerSection>
            <ContentDiv>
               <Titles
                  title={title}
                  secondPartTitle={secondPartTitle}
                  subtitle={subtitle}
               />
            </ContentDiv>
            <AboutDiv>
               {technologies ? <AboutTech technologies={technologies} /> : ''}
               {link ? <AboutLink link={link} /> : ''}
            </AboutDiv>
            <BackgroundImage image={image} />
         </ContainerSection>
      </>
   );
}

// STYLES
const ContainerSection = styled.section`
   width: 93vw;
   height: 31vw;
   margin: auto;
   padding-left: 3.5vw;
   border-radius: 0.5rem;
   overflow: hidden;
   position: relative;
`;

const ContentDiv = styled.div`
   z-index: 1;
   position: absolute;
   top: 4vw;
`;

const AboutDiv = styled.div`
   z-index: 1;
   position: absolute;
   bottom: 6vw;
`;
