import React from 'react';
import styled from 'styled-components';

const Landing = () => {
  return(
    <Container>
      <Top>
        <div>right</div>
        <TopRight>
          <h1>SoupLady</h1>
          <h4>Home cooked meals for the masses</h4>
        </TopRight>
      </Top>
      <About>

      </About>
    </Container>
  );
}

export default Landing;

const Container = styled.div`
  display: flex;
`;
const About = styled.div`
  display: flex;
`;
const Top = styled.div`
  flex: 1;
  height: 100vh;
  display: grid;
  border-bottom: 3px solid black;
  grid-template-columns: 40% 60%;
  font-family: 'karla';
  background-color: var(--green);
`;

const TopRight = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;


h1 {
  font-size: 8em;
  color: white;
  text-shadow: 1px 1px 1px black;
  font-weight: bold;
  letter-spacing: 3px;
}
h4 {
  letter-spacing: 2px;
}
`;
