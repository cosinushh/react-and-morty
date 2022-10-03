import { useParams } from 'react-router-dom';
import Card from '../components/Card';

export default function CharacterPage({ characters, toggleFavorite }) {
  const { id } = useParams();
  return (
    <>
      {characters
        .filter((character) => character.id === parseInt(id))
        .map((item) => {
          return <Card key={item.id} props={item} detailsState={true} toggleFavorite={() => toggleFavorite(item.id)} />;
        })}
    </>
  );
}
