async function fetchSingleCharacter(id, setter) {
  try {
    const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await result.json();
    setter([data]);
  } catch (error) {
    console.error(error);
  }
}

async function fetchCharacters(ids, setter) {
  try {
    const result = await fetch(`https://rickandmortyapi.com/api/character/${ids}`);
    const data = await result.json();
    if (ids.length === 0) {
      setter([]);
    } else if (ids.length === 1) {
      setter([data]);
    } else {
      setter(data);
    }
  } catch (error) {
    console.error(error);
  }
}

export { fetchSingleCharacter, fetchCharacters };
