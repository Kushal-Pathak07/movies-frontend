import React, { useState } from 'react';
import Movie from './Movie';
import EditMovieModal from './EditMovieModal';

const Movies = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieList, setMovieList] = useState(movies);

  const handleEditClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const handleMovieUpdate = (updatedMovie) => {
    const updatedList = movieList.map((m) =>
      m.id === updatedMovie.id ? updatedMovie : m
    );
    setMovieList(updatedList);
  };

  return (
    <>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movieList.map((movie) => (
          <Movie key={movie.id} movie={movie} onEdit={() => handleEditClick(movie)} />
        ))}
      </div>

      {isModalOpen && selectedMovie && (
        <EditMovieModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onSave={handleMovieUpdate}
        />
      )}
    </>
  );
};

export default Movies;
