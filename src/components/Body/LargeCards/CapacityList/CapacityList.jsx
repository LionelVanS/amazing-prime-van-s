import styled from 'styled-components';

import { useLargeCard } from '@/utils/context/largeCard';
import { devices } from '@/utils/style/breakpoints';

export default function CapacityList() {
   const data = useLargeCard();
   const capacities = data.capacity;
   return (
      <ListDiv>
         {capacities.map((capacity, index) => (
            <li key={index}>
               <p>{capacity.name}</p>
            </li>
         ))}
      </ListDiv>
   );
}

const ListDiv = styled.div`
   p {
      font-size: 1vw;
      margin-right: 1.5vw;
      text-decoration: underline;
      cursor: pointer;
      @media ${devices.tablet} {
         font-size: 1.5vw;
      }
      @media ${devices.mobileL} {
         font-size: 2vw;
      }
      @media ${devices.mobileM} {
         font-size: 2.5vw;
      }
   }
`;
