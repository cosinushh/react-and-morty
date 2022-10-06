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
  const [characters, setCharacters] = useState(readLocalStorage('characters') ?? []);

  function readLocalStorage(key) {
    const localStorageData = localStorage.getItem(key);
    return JSON.parse(localStorageData);
  }

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
    if (characters.length === 0) {
      fetchCharacters();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('characters', JSON.stringify(characters));
  }, [characters]);

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
          <Route path="/" element={<HomePage characters={characters} toggleFavorite={changeFavoriteStatus} />} />
          <Route
            path="/character/:id"
            element={<CharacterPage characters={characters} toggleFavorite={changeFavoriteStatus} />}
          />
          <Route
            path="/favorites"
            element={<FavoritesPage characters={characters} toggleFavorite={changeFavoriteStatus} />}
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
