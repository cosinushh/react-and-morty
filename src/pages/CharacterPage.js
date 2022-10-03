import { useParams } from 'react-router-dom';
import Card from '../components/Card';

export default function CharacterPage({ characters }) {
  const { id } = useParams();
  return (
    <>
      {characters
        .filter((character) => character.id === parseInt(id))
        .map((character) => {
          return <Card key={character.id} props={character} detailsState={true} />;
        })}
    </>
  );
}
