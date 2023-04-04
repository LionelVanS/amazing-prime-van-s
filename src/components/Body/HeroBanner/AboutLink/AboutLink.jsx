import Link from 'next/link';
import styled from 'styled-components';
import PlayIcon from '../../../Icons/PlayIcon';
import { useHeroBanner } from '@/utils/context/HeroBanner';

export default function AboutLink() {
   const datas = useHeroBanner();
   return (
      <AboutLinkDiv>
         <Link href={datas.link}>
            <PlayIcon />
            <p>En Savoir Plus</p>
         </Link>
      </AboutLinkDiv>
   );
}

const AboutLinkDiv = styled.div`
   a {
      display: flex;
      }
      p {
         font-size: 2vw;
         font-weight: bold;
         margin-left: 2rem;
      }
   }
`;
