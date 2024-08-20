import { useTheme } from '@rt-apps/theming';
import {
  FTTransferLabel,
  FlexAlignment,
  FlexView,
  PlayerFlagImage,
  PlayerTitleSubtitle,
  SearchResultListItemProps,
} from '@rt-apps/ui-components';

export const SearchResultListItem = ({ hit, onPress }: SearchResultListItemProps) => {
  const { APP_COLOR } = useTheme();

  const { type } = hit.document;

  return (
    <FlexView
      onPress={() => onPress(hit)}
      align={[FlexAlignment.SPACE_BETWEEN]}
      style={{ borderBottomWidth: 1, borderColor: APP_COLOR.BORDER }}
    >
      <FlexView gap={8}>
        <PlayerFlagImage
          player={{
            img: hit.document.image,
            rounded: type === 'player',
          }}
          country={{ img: hit.document.flag, rounded: true }}
        />
        <PlayerTitleSubtitle title={hit.document.title} subtitle={hit.document.title_sub} />
      </FlexView>
      <FTTransferLabel variant="body2" value={hit.document.transfer_value} />
    </FlexView>
  );
};
