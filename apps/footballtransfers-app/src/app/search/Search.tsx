import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@rt-apps/theming';
import { LogoHeader } from '../LogoHeader';
import { SearchScreen } from './SearchScreen';
import { TeamScreen } from './TeamScreen';
import { ArticleDetailScreen } from './ArticleDetailScreen';
import { ArticleDetailHeaderRight } from '@rt-apps/features';
import { PlayerScreen } from './PlayerScreen';

export type SearchStackParamList = {
  SearchScreen: undefined;
  TeamScreen: { teamId: string };
  ArticleDetailScreen: { articleId: string };
  PlayerScreen: { playerId: string };
};

const SearchStack = createNativeStackNavigator<SearchStackParamList>();

export const Search = () => {
  const { APP_COLOR } = useTheme();

  return (
    <SearchStack.Navigator
      initialRouteName="SearchScreen"
      screenOptions={{
        headerStyle: { backgroundColor: APP_COLOR.BACKGROUND },
        headerBackTitleVisible: false,
        headerTintColor: 'white',
      }}
    >
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerTitle: () => <LogoHeader />,
        }}
      />
      <SearchStack.Screen
        name="TeamScreen"
        component={TeamScreen}
        options={{
          headerTitle: () => <LogoHeader />,
        }}
      />
      <SearchStack.Screen
        name="ArticleDetailScreen"
        component={ArticleDetailScreen}
        options={({ route }) => ({
          headerTitle: () => <LogoHeader />,
          headerRight: () => <ArticleDetailHeaderRight articleId={route.params.articleId} />,
        })}
      />
      <SearchStack.Screen
        name="PlayerScreen"
        component={PlayerScreen}
        options={{
          headerTitle: () => <LogoHeader />,
        }}
      />
    </SearchStack.Navigator>
  );
};
