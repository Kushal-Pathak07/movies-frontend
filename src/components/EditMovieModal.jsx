import React, { useState, useEffect } from 'react';
import { getAllActors, updateMovie } from '../services/api';
import toast from 'react-hot-toast';

const EditMovieModal = ({ movie, onClose, onSave }) => {
  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);
  const [imageUrl, setImageUrl] = useState(movie.imageUrl);
  const [selectedActors, setSelectedActors] = useState(movie.actors.map(a => a.id));
  const [allActors, setAllActors] = useState([]);

  useEffect(() => {
    getAllActors()
      .then(res => setAllActors(res.data))
      .catch(err => console.error("Error fetching actors", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = {
      ...movie,
      title,
      description,
      imageUrl,
      actors: allActors.filter(actor => selectedActors.includes(actor.id))
    };

    updateMovie(movie.id, updated)
      .then(() => {
        onSave(updated); 
        onClose();  
        toast.success("Movie updated successfully !"); 
      })
      .catch(err => {
        console.error("Update failed", err);
      });
  };

  const toggleActor = (actorId) => {
    setSelectedActors(prev =>
      prev.includes(actorId) ? prev.filter(id => id !== actorId) : [...prev, actorId]
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-base-100 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Movie</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label"><span className="label-text font-medium">Title</span></label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label"><span className="label-text font-medium">Description</span></label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="textarea textarea-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label"><span className="label-text font-medium">Image URL</span></label>
            <input
              type="text"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label"><span className="label-text font-medium">Select Cast</span></label>
            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto border border-gray-300 rounded p-2">
              {allActors.map(actor => (
                <label key={actor.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedActors.includes(actor.id)}
                    onChange={() => toggleActor(actor.id)}
                    className="checkbox checkbox-sm"
                  />
                  <span className="text-sm">{actor.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button type="button" className="btn btn-outline btn-sm" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary btn-sm">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMovieModal;
