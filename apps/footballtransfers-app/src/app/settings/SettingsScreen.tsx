import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SettingsStackParamList } from './Settings';
import { Layout } from '@ui-kitten/components';

type SettingsScreenProps = NativeStackScreenProps<SettingsStackParamList>;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
  },
});

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const menu = [
  {
    id: 'my_account',
    title: 'My Account',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'logout',
    title: 'Logout',
  },
];

export const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  return (
    <Layout style={{ flex: 1 }}>
      <FlatList
        data={menu}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </Layout>
  );
};
