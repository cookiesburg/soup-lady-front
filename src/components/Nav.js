import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return(
    <Container>
      <Logo>SoupLady</Logo>
      <div></div>
      <div>about sign in join</div>

    </Container>
  );
}

export default Nav;

const Container = styled.div`
overflow: hidden;
background-color: black;

position: fixed;
top: 0;
width: 100%;
display: grid;
grid-template-columns: 10% 70% 20%;
font-family: 'karla';
color: white;
`;

const Logo = styled.div`
  font-size: 25px;
  padding: .2em;
  letter-spacing: 1px;
`;
