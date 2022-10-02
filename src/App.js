import Header from './components/Header';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import CharacterPage from './pages/CharacterPage';

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
          <Routes>
            <Route path="/" end element={<HomePage characters={characters} />}></Route>
            <Route
              path="/character/:id"
              element={<CharacterPage characters={characters} detailsState={true} />}
            ></Route>
          </Routes>
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
