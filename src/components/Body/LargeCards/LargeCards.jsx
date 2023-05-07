import styled from 'styled-components';
import Background from './Background/Background';
import CapacityList from './CapacityList/CapacityList';
import Infos from './Infos/Infos';
import Text from './Text/Text';
import Description from './Description/Description';
import Contact from './Contact/Contact';
import Social from './Social/Social';
import { useLargeCard } from '@/utils/context/largeCard';

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
               <LinksDiv>
                  <Contact />
                  <Social />
               </LinksDiv>
            </ContentDiv>
            <Background />
         </CardsSection>
      </>
   );
}

const LinksDiv = styled.div``;

const CardsSection = styled.section`
   width: 100%;
   height: 45vw;
   display: flex;
   flex-flow: column;
   justify-content: space-around;
   padding-left: 4vw;
   position: relative;
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
`;
