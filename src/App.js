import Header from './components/Header';
import Card from './components/Card';
import styled from 'styled-components';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Header appName={'React and Morty'} />
      <CardsContainer>
        <Card />
        <Card />
        <Card />
      </CardsContainer>
      <Navigation />
    </div>
  );
}

export default App;

const CardsContainer = styled.main`
  overflow-y: auto;
  margin-left: auto;
  margin-right: auto;
`;
