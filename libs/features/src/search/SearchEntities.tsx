import { Ionicons } from '@expo/vector-icons';
import { SearchHit } from '@rt-apps/data';
import { FlexView, NoSearchResults, SearchInput, SearchResultList } from '@rt-apps/ui-components';
import { debounce } from 'lodash';
import { useEffect, useMemo } from 'react';
import { SearchResultListItem } from './SearchListItem';
import { useSearchStore } from './searchStore';

type SearchEntitiesProps = {
  onPlayerPress: (playerId: string) => void;
  onTeamPress: (teamId: string) => void;
};

export const SearchEntities = ({ onPlayerPress, onTeamPress }: SearchEntitiesProps) => {
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);
  const searchLoading = useSearchStore((state) => state.searchLoading);

  const fetchSearchResults = useSearchStore((state) => state.fetchSearchResults);

  const handleInputChanged = (text: string) => {
    setSearchQuery(text);
    debouncedFetch();
  };

  const debouncedFetch = useMemo(
    () =>
      debounce(() => {
        fetchSearchResults();
      }, 150), // todo: tweak, is 150ms too long?
    [fetchSearchResults]
  );

  useEffect(() => {
    fetchSearchResults();

    return () => {
      debouncedFetch.cancel();
    };
  }, [debouncedFetch, fetchSearchResults]);

  const handlePress = (hit: SearchHit) => {
    if (hit.document.type === 'player') {
      onPlayerPress(hit.document.id);
    } else if (hit.document.type === 'team') {
      onTeamPress(hit.document.id);
    } else {
      console.log('Unhandled document type', hit.document.type);
    }
  };

  return (
    <FlexView direction="col" height="100%">
      <SearchInput inputChanged={handleInputChanged} loading={searchLoading} />
      <SearchResults onPress={handlePress} loading={searchLoading} />
    </FlexView>
  );
};

type SearchResultsProps = {
  onPress: (hit: SearchHit) => void;
  loading?: boolean;
};

export const SearchResults = ({ onPress, loading }: SearchResultsProps) => {
  const searchResults = useSearchStore((state) => state.searchResults);

  // handle all possible cases where searchResults is not type SearchData
  if (!searchResults) {
    return (
      <NoSearchResults
        icon={<Ionicons name="alert-circle-outline" size={20} />}
        message="No results found."
      />
    );
  }

  if (Array.isArray(searchResults)) {
    return (
      <NoSearchResults
        icon={<Ionicons name="alert-circle-outline" size={20} />}
        message="No results found."
      />
    );
  }

  return (
    <SearchResultList
      data={searchResults}
      onPress={onPress}
      ListItemComponent={SearchResultListItem}
      loading={loading}
    />
  );
};
