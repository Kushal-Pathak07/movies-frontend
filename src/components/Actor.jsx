import React from 'react';

const Actor = ({ actor }) => {
  return (
    <div className="bg-base-200 rounded shadow-md w-74 h-[500px] flex flex-col border border-transparent hover:border-primary transform transition-transform duration-300 hover:scale-105">
      <img
        src={actor.imageUrl}
        alt={actor.name}
        className="w-full h-64 object-cover rounded-t"
      />

      <div className="flex flex-col justify-between p-4 flex-grow">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-1 text-blue-500">{actor.name}</h3>
          <p className="text-sm text-white mb-2">{actor.bio}</p>
          <p className="text-sm font-semibold mb-1">Movies:</p>
          <ul className="list-disc list-inside text-sm text-yellow-200">
            {actor.movies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Actor;
