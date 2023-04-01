import styled from 'styled-components';

export default function Titles({ title, secondPartTitle, subtitle }) {
   return (
      <>
         <Title>
            <h1>{title}</h1>
            {secondPartTitle ? <h1>{secondPartTitle}</h1> : ''}
            <h2>{subtitle}</h2>
         </Title>
      </>
   );
}

const Title = styled.div`
   h1 {
      font-size: 2.5vw;
      margin: 0;
   }
   h2 {
      font-size: 1.3vw;
      margin: 0 0 2rem 0;
   }
`;
