import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000'; 

export const fetchRecommendationsByDescription = async (description) => {
    try {
        const response = await axios.post(`${API_URL}/recommendations/description`, { description });
        return response.data;
    } catch (error) {
        console.error('Error fetching recommendations by description:', error);
        throw error;
    }
};

export const fetchRecommendationsByGenre = async (genres) => {
    try {
        const response = await axios.post(`${API_URL}/recommendations/genre`, { genres });
        return response.data;
    } catch (error) {
        console.error('Error fetching recommendations by genre:', error);
        throw error;
    }
};

export const fetchFinalRecommendations = async (chosenIndices) => {
    try {
        const response = await axios.post(`${API_URL}/recommendations/final-recs`, { chosenIndices });
        return response.data;
    } catch (error) {
        console.error('Error fetching recommendations by genre:', error);
        throw error;
    }
};
