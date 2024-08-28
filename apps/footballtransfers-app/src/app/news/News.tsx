import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ArticleDetailHeaderRight } from '@rt-apps/features';
import { LogoHeader } from '../LogoHeader';
import { ArticleDetailScreen } from './ArticleDetailScreen';
import { NewsScreen } from './NewsScreen';

export type NewsStackParamList = {
  NewsScreen: undefined;
  ArticleDetailScreen: { articleId: string };
};

const NewsStack = createNativeStackNavigator<NewsStackParamList>();

export const News = () => {
  return (
    <NewsStack.Navigator
      initialRouteName="NewsScreen"
      screenOptions={{
        headerTitleAlign: 'left',
        headerStyle: { backgroundColor: '#031735' },
        headerBackTitleVisible: false,
        headerTintColor: 'white',
      }}
    >
      <NewsStack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{
          headerTitle: () => <LogoHeader />,
        }}
      />
      <NewsStack.Screen
        name="ArticleDetailScreen"
        component={ArticleDetailScreen}
        options={({ route }) => ({
          headerTitle: () => <LogoHeader />,
          headerRight: () => <ArticleDetailHeaderRight articleId={route.params.articleId} />,
        })}
      />
    </NewsStack.Navigator>
  );
};
