import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogoHeader } from '../LogoHeader';
import { SettingsScreen } from './SettingsScreen';
import { useTheme } from '@rt-apps/theming';

export type SettingsStackParamList = {
  SettingsScreen: undefined;
};

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

export const Settings = () => {
  const { APP_COLOR } = useTheme();

  return (
    <SettingsStack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerTitleAlign: 'left',
        headerStyle: { backgroundColor: APP_COLOR.BACKGROUND },
        headerBackTitleVisible: false,
        headerTintColor: 'white',
      }}
    >
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerTitle: () => <LogoHeader />,
        }}
      />
    </SettingsStack.Navigator>
  );
};
