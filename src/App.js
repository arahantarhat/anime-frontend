// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Results from './Results';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:searchTerm" element={<Results />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Navigate to the Results page with the search term as a parameter
    return <Navigate to={`/results/${searchTerm}`} />;
  };

  return (
    <div className="container">
      <div className="title">Recomendador de animes</div>
      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to={`/results/${searchTerm}`}>
          <button className="search-button" onClick={handleSearch}>
            <span role="img" aria-label="Search">
              🔍
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
