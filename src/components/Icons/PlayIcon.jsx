import styled from 'styled-components';

export default function PlayIcon() {
   return (
      <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
         <path d="M40 80c22.091 0 40-17.909 40-40S62.091 0 40 0 0 17.909 0 40s17.909 40 40 40ZM29.761 55.536V25.575c0-1.724 1.877-2.791 3.359-1.91l25.178 14.98c1.447.862 1.447 2.959 0 3.82L33.12 57.446c-1.482.882-3.359-.186-3.359-1.91Z" />
      </Icon>
   );
}

const Icon = styled.svg`
   width: 5vw;
   transition: transform 75ms linear;
   :hover {
      transform: scale(1.1);
   }
`;
