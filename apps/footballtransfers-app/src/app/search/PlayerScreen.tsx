import {
  MaterialTopTabNavigationOptions,
  MaterialTopTabScreenProps,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeArticleList, PlayerOverview, PlayerInfoHeader } from '@rt-apps/features';
import { useTheme } from '@rt-apps/theming';
import { Layout } from '@ui-kitten/components';
import { SearchStackParamList } from './Search';

export type PlayerScreenProps = NativeStackScreenProps<SearchStackParamList, 'PlayerScreen'>;

type TabScreenProps = {
  Overview: { playerId: string };
  News: { playerId: string };
};

const TopTab = createMaterialTopTabNavigator<TabScreenProps>();

export const PlayerScreen = ({ route }: PlayerScreenProps) => {
  const { TAB_COLOR, FONT_SIZE, FONT_WEIGHT, SPACING } = useTheme();

  const DEFAULT_OPTIONS: MaterialTopTabNavigationOptions = {
    /** custom ui theme **/
    tabBarActiveTintColor: TAB_COLOR.ACTIVE,
    tabBarInactiveTintColor: TAB_COLOR.INACTIVE,
    tabBarLabelStyle: {
      fontSize: FONT_SIZE.XS,
      fontWeight: FONT_WEIGHT.BOLD,
    },
    tabBarStyle: {
      backgroundColor: TAB_COLOR.BACKGROUND,
    },
    tabBarItemStyle: { padding: SPACING.XS },
    tabBarIndicatorStyle: {
      height: 4,
      backgroundColor: TAB_COLOR.ACTIVE, // Change this to your desired color
    },
  };

  return (
    <Layout style={{ flex: 1 }}>
      <PlayerInfoHeader playerId={route.params.playerId} />
      <TopTab.Navigator screenOptions={{ ...DEFAULT_OPTIONS }}>
        <TopTab.Screen
          name="Overview"
          component={PlayerOverviewTab}
          initialParams={{ playerId: route.params.playerId }}
        />
        <TopTab.Screen
          name="News"
          component={PlayerNewsTab}
          initialParams={{ playerId: route.params.playerId }}
        />
      </TopTab.Navigator>
    </Layout>
  );
};

type PlayerOverviewProps = MaterialTopTabScreenProps<TabScreenProps, 'Overview'>;
export const PlayerOverviewTab = ({ route }: PlayerOverviewProps) => {
  return <PlayerOverview playerId={route.params.playerId} />;
};

type PlayerNewsTabProps = MaterialTopTabScreenProps<TabScreenProps, 'News'>;
export const PlayerNewsTab = ({ route, navigation }: PlayerNewsTabProps) => {
  console.log(`ArticleList for ${route.params.playerId}`);

  return (
    <HomeArticleList
      onArticlePress={(articleId) => {
        navigation.getParent()?.navigate('ArticleDetailScreen', { articleId });
      }}
    />
  );
};
