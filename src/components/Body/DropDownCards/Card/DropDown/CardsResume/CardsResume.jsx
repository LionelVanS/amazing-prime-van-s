import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PlayIcon from '@/components/Icons/PlayIcon';
import PLusIcon from '@/components/Icons/PlusIcon';
import DotIcon from '@/components/Icons/DotIcon';
import { handleClick } from '@/utils/functions/handleClick';

export default function CardsResume({ data }) {
   const router = useRouter();

   return (
      <ResumeDiv>
         <Link href={data.link} onClick={(e) => handleClick(e, router, data)}>
            <PlayIcon />
            <p>En Savoir Plus</p>
         </Link>
         <OptionDiv>
            <PLusIcon />
            <DotIcon />
         </OptionDiv>
      </ResumeDiv>
   );
}

const ResumeDiv = styled.div`
   display: flex;
   align-items: center;
   margin-top: 0.5vw;
   a {
      display: flex;
      p {
         font-size: 0.8vw;
         margin-left: 0.5vw;
      }
      > svg {
         width: 2.5vw;
         fill: #fff;
      }
   }
`;
const OptionDiv = styled.div`
   width: 4vw;
   display: flex;
   justify-content: space-between;
   margin-left: 2.5vw;
   line-height: 0;
   svg {
      cursor: pointer;
   }
`;
