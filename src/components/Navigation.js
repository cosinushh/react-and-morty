import styled from 'styled-components';

function Navigation() {
  return (
    <footer>
      <nav>
        <NavigationContainer>
          <li>
            <div style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: 'purple' }}></div>
          </li>
          <li>
            <div style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: 'purple' }}></div>
          </li>
          <li>
            <div style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: 'purple' }}></div>
          </li>
          <li>
            <div style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: 'purple' }}></div>
          </li>
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
`;
