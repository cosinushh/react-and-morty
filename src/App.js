import Header from './components/Header';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import CharacterPage from './pages/CharacterPage';
import FavoritesPage from './pages/FavoritesPage';
import RandomPage from './pages/RandomPage';
import { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) ?? [];
  });

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

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  function changeFavoriteStatus(cardId) {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(cardId)) {
        return prevFavorites.filter((item) => item !== cardId);
      } else {
        return [...prevFavorites, cardId];
      }
    });
    console.log('CardId: ' + cardId);
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
            element={
              <FavoritesPage characters={characters} favorites={favorites} toggleFavorite={changeFavoriteStatus} />
            }
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
