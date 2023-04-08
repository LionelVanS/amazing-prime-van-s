import styled from 'styled-components';

export default function SearchIcon() {
   return (
      <>
         <SearchIconDiv>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               strokeWidth="2.5"
               stroke="#aaaaaa"
               strokeLinecap="round"
            >
               <path stroke="none" fill="none" d="M0 0h24v24H0z" />
               <circle cx="10" cy="10" r="7" fill="none" />
               <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
         </SearchIconDiv>
      </>
   );
}

const SearchIconDiv = styled.div`
   height: 100%;
   width: 4vw;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 4vw;
   cursor: pointer;
   :hover {
      background-color: #191e25;
   }
   svg {
      width: 1.5vw;
   }
`;
