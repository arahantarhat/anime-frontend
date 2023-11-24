// src/Results.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecommendations } from './integration/backendFunctions';
import './Results.css';

function Results() {
  const { searchTerm } = useParams();
  const [animeResults, setAnimeResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recommendations = await getRecommendations(searchTerm, 5);
        setAnimeResults(recommendations);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="results-container">
      {animeResults.map((anime) => (
        <Box key={anime.code} title={anime.show_titles} description={`Genres: ${anime.genres.join(', ')}`} />
      ))}
    </div>
  );
}

function Box({ title, description }) {
  return (
    <div className="box">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Results;
