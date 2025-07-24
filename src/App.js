import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { Toaster } from 'react-hot-toast';
import Actors from './components/Actors';

function App() {
  return (
    <BrowserRouter>
    <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/actors" element={<Actors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
