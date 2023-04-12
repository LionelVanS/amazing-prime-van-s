import styled from 'styled-components';
import Link from 'next/link';
import PlayIcon from '@/components/Icons/PlayIcon';

export default function Contact() {
   return (
      <ContactDiv>
         <Link href="mailto:lionel.vs@gmail.com">
            <PlayIcon />
            <p>Contactez Moi</p>
         </Link>
      </ContactDiv>
   );
}

const ContactDiv = styled.div`
   a {
      align-items: center;
      p {
         font-size: 1.5vw;
         font-weight: 700;
         margin-left: 1vw;
      }
      svg {
         fill: #fff;
      }
      :hover {
         svg {
            transform: scale(1.1);
         }
      }
   }
`;
