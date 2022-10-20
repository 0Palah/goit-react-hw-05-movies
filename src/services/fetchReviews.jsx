import themoviedbApi from './axiosCreateAPI';

const getFetchReviews = async ({ movieId }) => {
  const data = await themoviedbApi.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: 'd76cfeaddd14e5c6063db60e37f83b2f',
    },
  });
  return data.data;
};

export default getFetchReviews;
