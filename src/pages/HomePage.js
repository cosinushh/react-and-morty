import Card from '../components/Card';

export default function HomePage({ characters }) {
  return (
    <>
      {characters.map((character) => {
        return <Card key={character.id} props={character} />;
      })}
    </>
  );
}
