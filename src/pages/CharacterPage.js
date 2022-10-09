import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import { fetchSingleCharacter } from '../services';

export default function CharacterPage({ toggleFavorite, favorites }) {
  const { id } = useParams();
  const [detailCharacter, setDetailCharacter] = useState([]);

  useEffect(() => {
    fetchSingleCharacter(id, setDetailCharacter);
  }, [id]);

  return (
    <>
      {detailCharacter.map((character) => {
        return (
          <Card
            key={character.id}
            props={character}
            detailsState={true}
            toggleFavorite={() => toggleFavorite(character.id)}
            favorites={favorites}
          />
        );
      })}
    </>
  );
}
