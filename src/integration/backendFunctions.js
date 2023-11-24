// Import Axios library
import axios from 'axios';

// Define the base URL for your API
const BASE_URL = 'http://localhost:8000/api/v1'; // Update with your actual backend URL

// Function to get anime recommendations
export const getRecommendations = async (animeCode, nRecommendations) => {
    try {
        const response = await axios.get(`${BASE_URL}/recommendations`, {
            params: {
                anime_code: animeCode,
                n_recommendations: nRecommendations,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting recommendations:', error);
        throw error;
    }
};

// Function to get random anime recommendations
export const getRandomRecommendations = async (n) => {
    try {
        const response = await axios.get(`${BASE_URL}/random_recommendations`, {
            params: {
                n: n,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting random recommendations:', error);
        throw error;
    }
};

// Function to search for anime info
export const searchAnimeInfo = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/search_info`);
        return response.data;
    } catch (error) {
        console.error('Error searching for anime info:', error);
        throw error;
    }
};

// Function to get information about a single anime
export const getAnimeInfo = async (animeCode) => {
    try {
        const response = await axios.get(`${BASE_URL}/anime`, {
            params: {
                anime_code: animeCode,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting anime info:', error);
        throw error;
    }
};

// Function to get user recommendations
export const getUserRecommendations = async (searchAnime, recommendedAnime) => {
    try {
        const response = await axios.get(`${BASE_URL}/user_recommendations`, {
            params: {
                search_anime: searchAnime,
                recommended_anime: recommendedAnime,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting user recommendations:', error);
        throw error;
    }
};
