import axios from 'axios';

const baseURL = 'https://sheets.googleapis.com/v4/spreadsheets/1gr4IDm76qV8xVOFqFKybnYc2324-tMhorrg6JKvQciE/values:batchGet';

const key = `key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

const options = 'valueRenderOption=FORMULA&dateTimeRenderOption=FORMATTED_STRING';


export function getAllGames() {
  const range = `ranges=Jeux!A:Z`;
  const url = `${baseURL}?${key}&${range}&${options}`;
  return axios.get(url);
};

export function getAllEvents() {
  const range = `ranges=Planning!A:Z`;
  const url = `${baseURL}?${key}&${range}&${options}`;
  return axios.get(url);
};