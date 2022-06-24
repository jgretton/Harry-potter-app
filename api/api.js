const URL_characters =
  "https://hp-api.herokuapp.com/api/characters?limit=10&offset=20 ";

export const fetchCharacters = () => {
  return fetch(URL_characters)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
