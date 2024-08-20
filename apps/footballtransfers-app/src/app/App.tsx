import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Constants from 'expo-constants';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { LogLevel, OneSignal } from 'react-native-onesignal';
import 'react-native-pager-view'; // required for tab view

import { Ionicons } from '@expo/vector-icons';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { useBookmarkStore } from '@rt-apps/features';
import { Spacing } from '@rt-apps/ui-components';
import { Bookmarks } from './bookmarks/Bookmarks';
import { News } from './news/News';
import { Search } from './search/Search';
import { SettingsScreen } from './settings/SettingsScreen';

import { BASE_THEME, ThemeProvider, useTheme } from '@rt-apps/theming';

type BottomTabParamList = {
  News: undefined;
  Search: undefined;
  Bookmarks: undefined;
  Settings: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export const App = () => {
  const { TAB_COLOR, FONT_SIZE, FONT_WEIGHT } = useTheme();

  const DEFAULT_OPTIONS: BottomTabNavigationOptions = {
    headerShown: false,
    unmountOnBlur: true, // needed to trigger a rerender for pages using shared features
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
    tabBarItemStyle: { padding: Spacing.XS },
  };

  const hydrateBookmarks = useBookmarkStore((state) => state.hydrateBookmarks);

  useEffect(() => {
    hydrateBookmarks();

    OneSignal.Debug.setLogLevel(LogLevel.Verbose);
    OneSignal.initialize(Constants.expoConfig?.extra?.oneSignalAppId);

    console.log(`OneSignal App ID: ${Constants.expoConfig?.extra?.oneSignalAppId}`);

    // Also need enable notifications to complete OneSignal setup
    OneSignal.Notifications.requestPermission(true);
  }, [hydrateBookmarks]);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <BottomTab.Navigator screenOptions={{ ...DEFAULT_OPTIONS }}>
        <BottomTab.Screen
          name="News"
          component={News}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="newspaper-outline" color={color} size={14} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="search-outline" color={color} size={16} />,
          }}
        />
        <BottomTab.Screen
          name="Bookmarks"
          component={Bookmarks}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="bookmarks-outline" color={color} size={14} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="settings-outline" color={color} size={14} />,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export const Root = () => {
  return (
    <ThemeProvider theme={BASE_THEME}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <App />
      </ApplicationProvider>
    </ThemeProvider>
  );
};

export default Root;
