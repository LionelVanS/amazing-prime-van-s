import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PlayIcon from '@/components/Icons/PlayIcon';
import PLusIcon from '@/components/Icons/PlusIcon';
import DotIcon from '@/components/Icons/DotIcon';
import { handleClick } from '@/utils/functions/handleClick';
import { colors } from '@/utils/style/colors';

export default function CardsAbout({ data }) {
   const router = useRouter();

   return (
      <ResumeDiv>
         <Link href={data.link} onClick={(e) => handleClick(e, router, data)}>
            <PlayIcon />
            <p>En Savoir Plus</p>
         </Link>
         <OptionDiv>
            <StyledIconDiv>
               <PLusIcon />
            </StyledIconDiv>
            <StyledIconDiv>
               <DotIcon />
            </StyledIconDiv>
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
`;

const StyledIconDiv = styled.div`
   padding: 0.3vw;
   background-color: ${colors.spanBackground};
   border-radius: 50%;
   svg {
      width: 1.2vw;
      height: 1.2vw;
      cursor: pointer;
   }
`;
