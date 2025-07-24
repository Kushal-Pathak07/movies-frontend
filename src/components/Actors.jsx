import React, { useEffect, useState } from 'react';
import { getAllActors } from '../services/api';
import Actor from './Actor';
import Spinner from './Spinner';

const Actors = () => {
  const [actors, setActors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllActors()
      .then(res => {
        setActors(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch actors", err);
        setLoading(false);
      });
  }, []);

  const filteredActors = actors.filter(actor =>
    actor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">All Actors</h2>

      <input
        type="text"
        placeholder="Search by actor name..."
        className="input input-bordered w-full mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredActors.map(actor => (
            <Actor key={actor.id} actor={actor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Actors;
