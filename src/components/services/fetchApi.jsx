import axios from 'axios';

const themoviedbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/all/',
});

const getFetchApi = async () => {
  const data = await themoviedbApi.get('day', {
    params: {
      api_key: 'd76cfeaddd14e5c6063db60e37f83b2f',
    },
  });
  return data.data.results;
};

export default getFetchApi;
