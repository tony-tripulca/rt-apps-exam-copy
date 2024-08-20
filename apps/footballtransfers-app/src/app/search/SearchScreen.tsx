import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SearchEntities } from '@rt-apps/features';
import { SearchStackParamList } from './Search';

type SearchScreenProps = NativeStackScreenProps<SearchStackParamList, 'SearchScreen'>;

export const SearchScreen = ({ navigation }: SearchScreenProps) => {
  return (
    <SearchEntities
      onPlayerPress={(playerId) => navigation.navigate('PlayerScreen', { playerId })}
      onTeamPress={(teamId) => navigation.navigate('TeamScreen', { teamId })}
    />
  );
};
