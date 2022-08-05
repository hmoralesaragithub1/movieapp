import config from "./config.js";

// crear la funcion searchByText(searchText)
// dentro harán un fetch, a esta url:
// config.apiUrl + "?s=" + searchText + "&apikey=" + config.apiKey

const searchByText = async (searchText) => {
  const response = await fetch(
    `${config.apiUrl}?s=${searchText}&apikey=${config.apiKey}`
  );
  const data = response.json();
  return data;
};

const Services = {
  searchByText,
};

export default Services;
