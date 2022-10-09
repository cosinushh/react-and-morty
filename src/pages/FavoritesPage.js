import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { fetchCharacters } from '../services';

export default function FavoritesPage({ favorites, toggleFavorite }) {
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters(favorites, setFavoriteCharacters);
  }, [favorites]);

  return (
    <>
      {favoriteCharacters.map((character) => {
        return (
          <Card
            key={character.id}
            props={character}
            detailsState={false}
            toggleFavorite={() => toggleFavorite(character.id)}
            favorites={favorites}
          />
        );
      })}
    </>
  );
}
