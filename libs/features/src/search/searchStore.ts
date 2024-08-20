import { SearchData, search } from '@rt-apps/data';
import { create } from 'zustand';

type SearchState = {
  searchQuery: string;
  searchResults: SearchData | [] | null;
  searchLoading?: boolean;
};

type SearchAction = {
  setSearchQuery: (searchQuery: string) => void;
  fetchSearchResults: () => Promise<void>;
};

export const useSearchStore = create<SearchState & SearchAction>()((set, get) => ({
  searchQuery: '',
  searchResults: null,
  searchLoading: false,
  setSearchQuery: (searchQuery) => {
    set({ searchQuery });
  },
  fetchSearchResults: async () => {
    const state = get();

    let query = state.searchQuery;

    if (!query) {
      query = 'highlight';
    }

    // set is loading to true
    set({ searchLoading: true });

    const result = await search(query);

    set({ searchResults: result.data });

    // set is loading to false
    set({ searchLoading: false });
  },
}));
