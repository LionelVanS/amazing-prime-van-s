import Link from 'next/link';
import styled from 'styled-components';
import PlayIcon from '../../../Icons/PlayIcon';
import { useHeroBanner } from '@/utils/context/heroBanner';
import { devices } from '@/utils/style/breakpoints';

export default function AboutLink() {
   const data = useHeroBanner();
   return (
      <AboutLinkDiv>
         <Link href={data.link}>
            <PlayIcon />
            <p>En Savoir Plus</p>
         </Link>
      </AboutLinkDiv>
   );
}

const AboutLinkDiv = styled.div`
   a {
      display: flex;
      align-items: center;
      svg {
         fill: #fff;
      }
   }
   p {
      font-size: 2vw;
      font-weight: 700;
      margin-left: 2rem;
   }
   @media ${devices.mobileL} {
      height: 3vw;
      p {
         font-size: 3vw;
         margin-left: 1rem;
      }
      a {
         height: 3vw;
      }
   }
   @media ${devices.tablet} {
      height: 3vw;
      p {
         font-size: 2vw;
         margin-left: 1.5rem;
      }
   }
`;
