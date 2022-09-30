import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
      <img src="./react-and-morty-logo.png" alt="logo" />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  z-index: 20;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--background);
  margin: 0;
  padding: 0.2em;

  & img {
    height: 90px;
  }
`;
