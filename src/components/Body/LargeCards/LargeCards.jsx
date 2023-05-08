import styled from 'styled-components';

import { useLargeCard } from '@/utils/context/largeCard';
import { devices } from '@/utils/style/breakpoints';

import Text from './Text/Text';
import Infos from './Infos/Infos';
import CapacityList from './CapacityList/CapacityList';
import Description from './Description/Description';
import Contact from './Contact/Contact';
import Social from './Social/Social';
import Background from './Background/Background';

export default function LargeCards() {
   const data = useLargeCard();
   return (
      <>
         <CardsSection>
            <ContentDiv>
               <h1>{data.title}</h1>
               <Text />
               <Infos />
               <CapacityList />
               <Description />
               <div>
                  <Contact />
                  <Social />
               </div>
            </ContentDiv>
            <Background />
         </CardsSection>
      </>
   );
}

const CardsSection = styled.section`
   width: 100%;
   height: 95vh;
   display: flex;
   flex-flow: column;
   justify-content: space-around;
   padding-left: 4vw;
   position: relative;
   @media ${devices.tablet} {
      height: 50vw;
      h1 {
         font-size: 3vw;
      }
   }
   @media ${devices.mobileL} {
      height: 70vw;
      h1 {
         font-size: 3.5vw;
      }
   }
   @media ${devices.mobileM} {
      height: 100vw;
      h1 {
         font-size: 4.5vw;
      }
   }
`;

const ContentDiv = styled.div`
   width: 40%;
   position: absolute;
   z-index: 2;
   div,
   ul,
   a {
      display: flex;
   }
   @media ${devices.tablet} {
      width: 50%;
   }
   @media ${devices.mobileL} {
      width: 60%;
   }
   @media ${devices.mobileM} {
      width: 60%;
   }
`;
