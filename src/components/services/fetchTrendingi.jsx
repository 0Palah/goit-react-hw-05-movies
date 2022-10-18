import themoviedbApi from './axiosCreateAPI';

const getFetchApi = async () => {
  const data = await themoviedbApi.get('/trending/movie/day', {
    params: {
      api_key: 'd76cfeaddd14e5c6063db60e37f83b2f',
    },
  });
  return data.data.results;
};

export default getFetchApi;
