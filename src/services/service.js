import axios from 'axios';
import logger from '../logger';

const SPORTS_API_URL_TO_GET_ODDS = 'https://api.the-odds-api.com/v4/sports/basketball_nba/odds/';
const SPORTS_API_URL_TO_GET_FINAL_SCORE = 'https://api.the-odds-api.com/v4/sports/basketball_nba/scores/';


const SPORTS_API_KEY = process.env.SPORTS_API_KEY;

const params = {
    regions: 'us',
    markets: 'h2h',
    apiKey: SPORTS_API_KEY
  };

 export const fetchLiveData = async () => {
    try {
      const response = await axios.get(SPORTS_API_URL_TO_GET_ODDS, { params });
      logger.info('fetched live data from sports API')
      console.log(JSON.stringify(response.data, null, 2));
    } catch (error) {
      throw new Error(`Failed to fetch live data: ${error}`);
    }
  };

    export const fetchFinalScores = async () => {
    try {
      const response = await axios.get(SPORTS_API_URL_TO_GET_FINAL_SCORE, { params });
      logger.info('fetched final score of matches from sports API')
      console.log(JSON.stringify(response.data, null, 2));
    } catch (error) {
      throw new Error(`Failed to fetch final score of the match: ${error}`);
    }
  };
  
  