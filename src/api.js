import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/c76ip8B2hhjDO8JInhpYQREKcS3G7Oux',
});

const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
    return response.data;
   },
 };

 export default api;