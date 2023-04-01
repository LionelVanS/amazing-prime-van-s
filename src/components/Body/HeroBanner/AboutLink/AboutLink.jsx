import Link from 'next/link';
import styled from 'styled-components';

import PlayIcon from '../../../Icons/PlayIcon';

export default function AboutLink({ link }) {
   return (
      <AboutLinkDiv>
         <Link href={link}>
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
