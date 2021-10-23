const api = 'https://www.breakingbadapi.com/api/';

const getCharacters = async () => {
  try {
    const url = api + 'characters';
    const convertToJson = (response) => response.json();
    return await fetch(url).then(convertToJson);
  } catch (e) {
    throw e;
  }
};
export default {
  getCharacters,
};
