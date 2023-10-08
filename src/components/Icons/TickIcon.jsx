import styled from 'styled-components';

export default function TickIcon() {
   return (
      <Icon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
         <circle cx="10" cy="10" r="10" fill="#00D1FF"></circle>
         <path
            fill="#000"
            d="M12.979 6.897a1.306 1.306 0 0 1 1.901.027 1.403 1.403 0 0 1-.025 1.926l-5.151 5.252a1.307 1.307 0 0 1-1.935-.063L5.837 11.8a1.403 1.403 0 0 1 .093-1.923 1.307 1.307 0 0 1 1.9.098l.997 1.156 4.152-4.234Z"
         ></path>
      </Icon>
   );
}

const Icon = styled.svg`
   width: 1.5vw;
`;
