import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <footer>
      <nav>
        <NavigationContainer>
          <li>
            <LinkButton to="/" end>
              Home
            </LinkButton>
          </li>
          <li>
            <LinkButton to="/favorites">Favorites</LinkButton>
          </li>
          <li>
            <LinkButton to="/random">Random</LinkButton>
          </li>
          {/* <li>
            <LinkButton>X</LinkButton>
          </li> */}
        </NavigationContainer>
      </nav>
    </footer>
  );
}

export default Navigation;

const NavigationContainer = styled.ul`
  z-index: 30;
  box-shadow: 6px 4px 6px 6px rgba(0, 0, 0, 0.4);
  padding: 15px;
  background-color: var(--background);
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  transition: 500ms ease-in-out;
`;

const LinkButton = styled(NavLink)`
  font-family: var(--copy);
  font-size: 0.85em;
  text-transform: uppercase;
  margin: 10px;
  text-decoration: none;
  background-color: var(--primary);
  color: var(--background);
  padding: 0.5rem;
  border-radius: 3px;

  &.active {
    background-color: var(--secondary);
  }

  &:hover {
    background-color: var(--tertiary);
  }
`;
