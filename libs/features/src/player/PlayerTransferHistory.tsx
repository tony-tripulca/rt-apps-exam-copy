import { IPlayerTransferHistory } from '@rt-apps/data';
import { useTheme } from '@rt-apps/theming';
import {
  FlexAlignment,
  FlexView,
  ImagePreview,
  SkeletonTransferHistory,
  TableHeader,
  TableRow,
  Typography,
} from '@rt-apps/ui-components';
import { FlatList } from 'react-native';

interface PlayerTransferHistoryProps {
  data?: IPlayerTransferHistory[];
  scrollEnabled?: boolean;
}

export const PlayerTransferHistory = ({
  data,
  scrollEnabled = true,
}: PlayerTransferHistoryProps) => {
  const { SPACING, APP_COLOR, FONT_COLOR } = useTheme();

  return (
    <FlexView direction="col">
      <Typography variant="h2" color={APP_COLOR.THEME_DARK} style={{ padding: SPACING.SM }}>
        Transfer History
      </Typography>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        scrollEnabled={scrollEnabled}
        ListHeaderComponent={
          <TableHeader
            headers={[
              { name: 'to Club', style: { paddingHorizontal: SPACING.SM } },
              {
                name: 'Transfer fee',
                style: { justifyContent: 'flex-end', paddingHorizontal: SPACING.SM },
              },
            ]}
          />
        }
        renderItem={({ item, index }) => (
          <TableRow
            key={index}
            align={[FlexAlignment.ALIGN_CENTER, FlexAlignment.SPACE_BETWEEN]}
            isOddRow={index % 2 === 0}
            style={{ padding: SPACING.SM }}
          >
            <FlexView align={[FlexAlignment.ALIGN_CENTER]} gap={SPACING.SM}>
              <ImagePreview uri={item.to.image} height={40} width={40} />
              <FlexView direction="col" gap={SPACING.XS}>
                <Typography variant="body2">{item.to.name}</Typography>
                <Typography variant="caption">
                  {item.date.from} / {item.date.to}
                </Typography>
              </FlexView>
            </FlexView>
            <Typography
              variant="h3"
              color={item.transferFee === 'Loan' ? FONT_COLOR.SECONDARY : FONT_COLOR.PRIMARY}
            >
              {item.transferFee}
            </Typography>
          </TableRow>
        )}
        ListEmptyComponent={() => <SkeletonTransferHistory />}
      />
    </FlexView>
  );
};
