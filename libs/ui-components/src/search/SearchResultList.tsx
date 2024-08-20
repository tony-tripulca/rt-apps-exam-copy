import { Ionicons } from '@expo/vector-icons';
import { SearchData, SearchHit } from '@rt-apps/data';
import { useTheme } from '@rt-apps/theming';
import React from 'react';
import { FlatList } from 'react-native';
import { FlexAlignment, FlexView, Typography } from '../common';
import { SkeletonSearchList } from '../skeletons';

type SearchResultListProps = {
  data: SearchData;
  onPress: (hit: SearchHit) => void;
  ListItemComponent: React.ComponentType<SearchResultListItemProps>;
  loading?: boolean;
};

export const SearchResultList = ({
  data: { hits },
  onPress,
  ListItemComponent,
  loading,
}: SearchResultListProps) => {
  return (
    <FlatList
      data={hits}
      keyExtractor={(item) => item.document.id}
      ListEmptyComponent={
        loading ? (
          <SkeletonSearchList />
        ) : (
          <NoSearchResults
            icon={<Ionicons name="alert-circle-outline" size={20} />}
            message="No results found."
          />
        )
      }
      renderItem={({ item }) => <ListItemComponent hit={item} onPress={onPress} />}
      style={{ width: '100%' }}
    />
  );
};

export type SearchResultListItemProps = {
  hit: SearchHit;
  onPress: (hit: SearchHit) => void;
};

export const NoSearchResults = ({ message, icon }: { message: string; icon?: React.ReactNode }) => {
  const { SPACING, FONT_COLOR } = useTheme();

  return (
    <FlexView align={[FlexAlignment.ALIGN_CENTER]} padding={SPACING.SM} gap={8}>
      {icon}
      <Typography color={FONT_COLOR.SECONDARY}>{message}</Typography>
    </FlexView>
  );
};
