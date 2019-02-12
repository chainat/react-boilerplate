import axios from 'axios';
import { SAMPLE_USER_API_HOST } from '../consts/actions';

class ApiClient {
  static async getRandomUsers(params) {
    const finalUrl = `${SAMPLE_USER_API_HOST}?results=${params.limit}`;
    try {
      const res = await axios.get(finalUrl);
      return res.data;
    } catch (err) {
      throw err;
    }
  }
}

export default ApiClient;
