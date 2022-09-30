import styled from 'styled-components';

function Header({ appName }) {
  return (
    <HeaderContainer>
      <h2>{appName}</h2>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  z-index: 20;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--background);
  margin: 0;
  padding: 1rem;

  & h2 {
    font-family: 'Get Schwifty';
    font-size: 1.5rem;
    color: var(--primary);
    margin: 0;
    padding: 0;
  }
`;
