import Header from './components/Header';
import Card from './components/Card';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import { useState, useEffect } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);

  async function fetchCharacters() {
    try {
      const result = await fetch('https://rickandmortyapi.com/api/character');
      const data = await result.json();
      setCharacters(data.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <Header appName={'React and Morty'} />
      <CardsContainer>
        {characters.map((character) => {
          return <Card key={character.id} props={character} />;
        })}
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
