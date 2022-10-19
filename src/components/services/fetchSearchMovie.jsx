import themoviedbApi from './axiosCreateAPI';

const getSearchMovie = async ({ searchQuery }) => {
  const data = await themoviedbApi.get('/search/movie', {
    params: {
      api_key: 'd76cfeaddd14e5c6063db60e37f83b2f',
      query: searchQuery,
    },
  });
  return data.data.results;
};

export default getSearchMovie;
