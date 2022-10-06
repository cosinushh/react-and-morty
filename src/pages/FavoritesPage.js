import Card from '../components/Card';

export default function FavoritesPage({ characters, favorites, toggleFavorite }) {
  return (
    <>
      {characters
        .filter((character) => favorites.includes(character.id))
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
        })}
    </>
  );
}
