import { getApiResponse } from "@lib/request";

export const fetchTrendingMovies = async () => {
  const data = await getApiResponse("/trending/movie/week");
  const trending = data.results;
  return trending;
};

export const fetchGenresMovies = async () => {
  const data = await getApiResponse("/genre/movie/list");
  const genres = data.genres;

  for (const genre of genres) {
    const data = await getApiResponse(
      `/discover/movie?with_genres=${genre.id}`
    );
    // Add movies array to genre object -->
    // for example: genre = {id: 28, name: "Action", movies: [{...}]}
    genre.movies = data.results;
  }

  return genres;
};
