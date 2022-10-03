import Header from './components/Header';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import CharacterPage from './pages/CharacterPage';
import { useLocalStorage } from './hooks';
import { useEffect } from 'react';

function App() {
  const [characters, setCharacters] = useLocalStorage('character');

  async function fetchCharacters() {
    try {
      const result = await fetch('https://rickandmortyapi.com/api/character');
      const data = await result.json();
      const dataWithFavorite = data.results.map((date) => {
        return { ...date, favorite: false };
      });
      setCharacters(dataWithFavorite);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  function changeFavoriteStatus(cardId) {
    setCharacters(
      characters.map((character) => {
        if (character.id === cardId) {
          return { ...character, favorite: !character.favorite };
        } else {
          return character;
        }
      })
    );
  }

  return (
    <div className="App">
      <Header appName={'React and Morty'} />
      <CardsContainer>
        <Routes>
          <Route
            path="/"
            end
            element={<HomePage characters={characters} toggleFavorite={changeFavoriteStatus} />}
          ></Route>
          <Route path="/character/:id" element={<CharacterPage characters={characters} toggleFavorite={changeFavoriteStatus} />}></Route>
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
