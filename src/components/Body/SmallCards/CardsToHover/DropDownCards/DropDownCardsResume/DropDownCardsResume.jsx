// LIBS
import styled from 'styled-components';
import Link from 'next/link';

// IMPORTED COMPONENT
import PlayIcon from '@/components/Icons/PlayIcon';
import PLusIcon from '@/components/Icons/PlusIcon';
import DotIcon from '@/components/Icons/DotIcon';

// EXPORTED COMPONENT
export default function DropDownCardsResume({ data }) {
   return (
      <ResumeDiv>
         <Link href={data.link}>
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

// STYLES
const ResumeDiv = styled.div`
   display: flex;
   align-items: center;
   position: absolute;
   top: 1.5vw;
   a {
      display: flex;
      p {
         font-size: 1vw;
         margin-left: 0.5vw;
      }
      > svg {
         width: 2.5vw;
      }
   }
`;
const OptionDiv = styled.div`
   width: 4vw;
   display: flex;
   justify-content: space-between;
   margin-left: 1.5vw;
   line-height: 0;
   svg {
      cursor: pointer;
   }
`;
