import axios from 'axios';

const baseURL = 'https://sheets.googleapis.com/v4/spreadsheets/1gr4IDm76qV8xVOFqFKybnYc2324-tMhorrg6JKvQciE/values:batchGet';

const key = `key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

const jeuxRange = `ranges=Jeux!A:Z`;
const options = 'valueRenderOption=FORMULA&dateTimeRenderOption=FORMATTED_STRING';
const url = `${baseURL}?${key}&${jeuxRange}&${options}`;

function getAllGames() {
  return axios.get(url);
}

export default getAllGames;