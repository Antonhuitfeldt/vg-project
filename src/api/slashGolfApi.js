import axios from 'axios';

const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

export const getSchedule = async () => {
    const options = {
    method: 'GET',
    url: 'https://live-golf-data.p.rapidapi.com/schedule',
    params: {
        orgId: '1',
        year: '2026'
    },
    headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'live-golf-data.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
    };
    
    try {
      const response = await axios.request(options)
      return response.data
    } catch (error) {
      console.error(error)
    }
  };

export const getLeaderboard = async (tournId) => {
    const options = {
    method: 'GET',
    url: 'https://live-golf-data.p.rapidapi.com/leaderboard',
    params: {
        orgId: '1',
        tournId: tournId,
        year: '2026'
    },
    headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'live-golf-data.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
    };

    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
}
}





