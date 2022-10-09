import Card from '../components/Card';

export default function HomePage({ characters, toggleFavorite, favorites }) {
  return (
    <>
      {characters.map((character) => {
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
