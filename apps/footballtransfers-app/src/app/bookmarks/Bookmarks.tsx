import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogoHeader } from '../LogoHeader';
import { ArticleDetailScreen } from './ArticleDetailScreen';
import { BookmarksScreen } from './BookmarksScreen';
import { ArticleDetailHeaderRight } from '@rt-apps/features';

export type BookmarksStackParamList = {
  BookmarksScreen: undefined;
  ArticleDetailScreen: { articleId: string };
};

const BookmarksStack = createNativeStackNavigator<BookmarksStackParamList>();

export const Bookmarks = () => {
  return (
    <BookmarksStack.Navigator
      initialRouteName="BookmarksScreen"
      screenOptions={{
        headerTitleAlign: 'left',
        headerStyle: { backgroundColor: '#031735' },
        headerBackTitleVisible: false,
        headerTintColor: 'white',
      }}
    >
      <BookmarksStack.Screen
        name="BookmarksScreen"
        component={BookmarksScreen}
        options={{
          headerTitle: () => <LogoHeader />,
        }}
      />
      <BookmarksStack.Screen
        name="ArticleDetailScreen"
        component={ArticleDetailScreen}
        options={({ route }) => ({
          headerTitle: () => <LogoHeader />,
          headerRight: () => <ArticleDetailHeaderRight articleId={route.params.articleId} />,
        })}
      />
    </BookmarksStack.Navigator>
  );
};
