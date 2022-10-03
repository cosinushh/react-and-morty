import Card from '../components/Card';

export default function FavoritesPage({ characters, toggleFavorite }) {
  return (
    <>
      {characters
        .filter((character) => character.favorite === true)
        .map((item) => {
          return (
            <Card key={item.id} props={item} detailsState={false} toggleFavorite={() => toggleFavorite(item.id)} />
          );
        })}
    </>
  );
}
