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
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--background);
  margin: 0;
  padding: 1rem;

  & h2 {
    color: var(--dark);
    margin: 0;
    padding: 0;
  }
`;
