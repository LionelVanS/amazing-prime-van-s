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
   const datas = useLargeCard();
   return (
      <>
         <CardsSection>
            <ContentDiv>
               <h1>{datas.title}</h1>
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
   padding: 9.5vw 0 0 4vw;
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
