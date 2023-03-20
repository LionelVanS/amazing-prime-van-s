import styled from 'styled-components';

// EXPORTED COMPONENT
export default function SearchIcon() {
   return (
      <>
         <SearchIconDiv>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="28"
               height="28"
               viewBox="0 0 24 24"
               strokeWidth="2.5"
               stroke="#aaaaaa"
               fill="none"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <circle cx="10" cy="10" r="7" />
               <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
         </SearchIconDiv>
      </>
   );
}

// STYLES
const SearchIconDiv = styled.div`
   height: 100%;
   width: 4rem;
   display: flex;
   justify-content: center;
   margin-left: 4rem;
   cursor: pointer;
   :hover {
      background-color: #191e25;
   }
   svg {
      margin-top: 1rem;
   }
`;
