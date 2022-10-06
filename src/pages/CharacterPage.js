import { useParams } from 'react-router-dom';
import Card from '../components/Card';

export default function CharacterPage({ characters, toggleFavorite, favorites }) {
  const { id } = useParams();
  return (
    <>
      {characters
        .filter((character) => character.id === parseInt(id))
        .map((item) => {
          return (
            <Card
              key={item.id}
              props={item}
              detailsState={true}
              favorites={favorites}
              toggleFavorite={() => toggleFavorite(item.id)}
            />
          );
        })}
    </>
  );
}
