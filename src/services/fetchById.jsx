import themoviedbApi from './axiosCreateAPI';

const getFetchById = async ({ movieId }) => {
  const data = await themoviedbApi.get(`/movie/${movieId}`, {
    params: {
      api_key: 'd76cfeaddd14e5c6063db60e37f83b2f',
    },
  });
  return data.data;
};

export default getFetchById;
