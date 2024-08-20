import {
  MaterialTopTabNavigationOptions,
  MaterialTopTabScreenProps,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeArticleList, TeamInfoHeader, TeamSquadListView } from '@rt-apps/features';
import { useTheme } from '@rt-apps/theming';
import { Layout } from '@ui-kitten/components';
import { SearchStackParamList } from './Search';

export type TeamScreenProps = NativeStackScreenProps<SearchStackParamList, 'TeamScreen'>;

type TabScreenProps = {
  Squad: { teamId: string };
  News: { teamId: string };
};

const TopTab = createMaterialTopTabNavigator<TabScreenProps>();

export const TeamScreen = ({ route }: TeamScreenProps) => {
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
      <TeamInfoHeader teamId={route.params.teamId} />
      <TopTab.Navigator screenOptions={{ ...DEFAULT_OPTIONS }}>
        <TopTab.Screen
          name="Squad"
          component={TeamSquadTab}
          initialParams={{ teamId: route.params.teamId }}
        />
        <TopTab.Screen
          name="News"
          component={TeamNewsTab}
          initialParams={{ teamId: route.params.teamId }}
        />
      </TopTab.Navigator>
    </Layout>
  );
};

type TeamSquadTabProps = MaterialTopTabScreenProps<TabScreenProps, 'Squad'>;
export const TeamSquadTab = ({ route }: TeamSquadTabProps) => {
  return <TeamSquadListView teamId={route.params.teamId} />;
};

type TeamNewsTabProps = MaterialTopTabScreenProps<TabScreenProps, 'News'>;
export const TeamNewsTab = ({ route, navigation }: TeamNewsTabProps) => {
  console.log(`ArticleList for ${route.params.teamId}`);

  return (
    <HomeArticleList
      onArticlePress={(articleId) => {
        navigation.getParent()?.navigate('ArticleDetailScreen', { articleId });
      }}
    />
  );
};
