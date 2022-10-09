import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';
import FavoritesPage from './pages/FavoritesPage';
import RandomPage from './pages/RandomPage';

import { useEffect, useState } from 'react';
import { useLocalStorage } from './hooks.js';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  async function fetchCharacters() {
    try {
      const result = await fetch('https://rickandmortyapi.com/api/character/');
      const data = await result.json();
      setCharacters(data.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  function changeFavoriteStatus(cardId) {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(cardId)) {
        return prevFavorites.filter((item) => item !== cardId);
      } else {
        return [...prevFavorites, cardId];
      }
    });
  }

  return (
    <div className="App">
      <Header appName={'React and Morty'} />
      <CardsContainer>
        <Routes>
          <Route
            path="/"
            element={<HomePage characters={characters} favorites={favorites} toggleFavorite={changeFavoriteStatus} />}
          />
          <Route
            path="/character/:id"
            element={
              <CharacterPage characters={characters} favorites={favorites} toggleFavorite={changeFavoriteStatus} />
            }
          />
          <Route
            path="/favorites"
            element={<FavoritesPage favorites={favorites} toggleFavorite={changeFavoriteStatus} />}
          />
          <Route
            path="/random"
            element={<RandomPage characters={characters} toggleFavorite={changeFavoriteStatus} />}
          />
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
