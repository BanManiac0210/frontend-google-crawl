import axios from 'axios';
import { serverURL } from '../const/constant';

export const querySearch = {
  async search(query) {
    try {
      const response = await axios.get(`${serverURL}/search`, {
        params: {q: query}
      });
      return response.data;
    }
    catch (error) {
      throw new Error("Invalid search error: ", error);
    }
  }

}