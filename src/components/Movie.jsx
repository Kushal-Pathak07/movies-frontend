import React from "react";

const Movie = ({ movie, onEdit }) => {
  return (
    <div className="bg-base-200 rounded shadow-md overflow-hidden w-[22rem] transform transition-transform duration-300 hover:scale-105 border border-transparent hover:border-primary flex flex-col justify-between">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="w-full h-[22rem] object-cover rounded-t"
      />

      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold mb-1">{movie.title}</h3>
          <p className="text-sm text-gray-400 mb-2">{movie.description}</p>

          <p className="text-sm font-semibold mb-1">Cast:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.actors.map((actor) => (
              <div key={actor.id} className="flex items-center gap-1">
                <img
                  src={actor.imageUrl}
                  alt={actor.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-xs">{actor.name}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          className="bg-primary text-white text-sm px-3 py-1 rounded w-[100%] mx-auto hover:bg-primary-focus"
          onClick={() => onEdit(movie)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Movie;
