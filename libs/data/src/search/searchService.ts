import axios from 'axios';
import { SearchData } from './searchTypes';

export const search = async (query: string) => {
  const formData = new FormData();
  formData.append('search_value', query);

  const { data } = await axios.post<SearchData>(
    `https://www.footballtransfers.com/en/search/actions/search`,
    formData
  );

  return { data };
};
