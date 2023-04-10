import { useLargeCard } from '@/utils/context/largeCard';
import styled from 'styled-components';

export default function SoftSkills() {
   const datas = useLargeCard();
   const softSkills = datas.capacity;
   return (
      <SoftSkillsDiv>
         {softSkills.map((skill, index) => (
            <li key={index}>
               <p>{skill.name}</p>
            </li>
         ))}
      </SoftSkillsDiv>
   );
}

const SoftSkillsDiv = styled.div`
   p {
      font-size: 1vw;
      margin-right: 1.5vw;
      text-decoration: underline;
      cursor: pointer;
   }
`;
