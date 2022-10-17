import axios from 'axios';

const themoviedbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const getFetchById = async ({ movieId }) => {
  console.log(movieId);
  const data = await themoviedbApi.get(`/movie/${movieId}`, {
    params: {
      api_key: 'd76cfeaddd14e5c6063db60e37f83b2f',
    },
  });
  console.log(data.data);
  return data.data;
};

export default getFetchById;
