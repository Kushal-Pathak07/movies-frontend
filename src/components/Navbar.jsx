import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-base-200 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary">🎬 MovieApp</h1>
      <div className="space-x-4">
        <Link to="/" className="btn btn-ghost text-lg">Movies</Link>
        <Link to="/actors" className="btn btn-ghost text-lg">Actors</Link>
      </div>
    </div>
  )
}

export default Navbar