import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8081/api", 
});

export const getAllMovies = () => api.get("/movies");

export const getAllActors = () => api.get("/actors");

export const updateMovie = (id, movie) => {
  return api.put(`/movies/${id}`, movie, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
