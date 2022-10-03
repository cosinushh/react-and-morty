import Card from '../components/Card';

export default function HomePage({ characters, toggleFavorite }) {
  return (
    <>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            props={character}
            detailsState={false}
            toggleFavorite={() => toggleFavorite(character.id)}
          />
        );
      })}
    </>
  );
}
