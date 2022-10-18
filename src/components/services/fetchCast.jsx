import themoviedbApi from './axiosCreateAPI';

const getFetchCast = async ({ movieId }) => {
  const data = await themoviedbApi.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: 'd76cfeaddd14e5c6063db60e37f83b2f',
    },
  });
  return data.data;
};

export default getFetchCast;
