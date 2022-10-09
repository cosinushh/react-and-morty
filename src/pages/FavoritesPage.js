import { useEffect, useState } from 'react';
import Card from '../components/Card';

export default function FavoritesPage({ favorites, toggleFavorite }) {
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  async function fetchCharacters(id) {
    const alreadyExists = favoriteCharacters.find((favChar) => favChar.id == id);
    if (!alreadyExists) {
      try {
        const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await result.json();
        setFavoriteCharacters((prevFav) => {
          //console.log(id, data);
          return [...prevFav, data];
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    favorites.map((favoriteId) => fetchCharacters(favoriteId));
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

/* {favoriteCharacters.filter(favoriteCharacter => favorites.includes(favoriteCharacter.id))
      .map((item) => {
        return (
          <Card
            key={item.id}
            props={item}
            detailsState={false}
            favorites={favorites}
            toggleFavorite={() => toggleFavorite(item.id)}
          />
        );
      })} */

/*       {favorites.map((favoriteId) => {
        //console.log('favoriteId: ' + favoriteId);
        favoriteCharacters.filter((favoriteCharacter) => {
          //console.log('favorite Character Id: ' + favoriteCharacter.id);
          if (favoriteCharacter.id == favoriteId) {
            console.log('true: ' + favoriteCharacter.id, favoriteId);
            return (
              <Card
                key={favoriteCharacter.id}
                props={favoriteCharacter}
                detailsState={false}
                favorites={favorites}
                toggleFavorite={() => toggleFavorite(favoriteCharacter.id)}
              />
            );
          }
        });
      })} */
