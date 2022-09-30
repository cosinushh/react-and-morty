import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Header appName={'React and Morty'} />
      <CardsContainer>
        <Card />
      </CardsContainer>
      <footer>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 15 }}>
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
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;

const CardsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
