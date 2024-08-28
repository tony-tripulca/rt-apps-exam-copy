import axios from 'axios';
import { SearchData } from './searchTypes';

export const search = async (query: string) => {
  const formData = new FormData();
  formData.append('search_value', query);

  /**
   * TO DO: Revert back when data is fetched correctly
   */
  // const { data } = await axios.post<SearchData>(
  //   `https://www.footballtransfers.com/en/search/actions/search`,
  //   formData
  // );

  /**
   * TO DO:
   * Find and understand if /en/search/actions/search needs:
   * 1. Auth headers?
   * 2. Same origin request?
   *
   * BLOCKER:
   * 1. Unable to find available API document for footballtransfers
   */
  const { data } = await axios<SearchData>({
    method: 'POST',
    baseURL: 'https://www.footballtransfers.com/en/search',
    url: `/actions/search`,
    data: {
      search_page: 1,
      search_value: query,
      players: 1,
      teams: 1,
    },
  });

  return { data };
};
