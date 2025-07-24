import React, { useState, useEffect } from 'react';
import { getAllMovies } from '../services/api';
import Spinner from '../components/Spinner';
import Movies from '../components/Movies';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    getAllMovies()
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching movies:', err);
        setLoading(false);
      });
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search by movie..."
        className="input input-bordered w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? <Spinner /> : <Movies movies={filteredMovies} />}
    </div>
  );
};

export default HomePage;
