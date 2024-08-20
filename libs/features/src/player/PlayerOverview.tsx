import { useTheme } from '@rt-apps/theming';
import { FlexView } from '@rt-apps/ui-components';
import { useEffect, useMemo } from 'react';
import { ScrollView } from 'react-native';
import { usePlayerInfoStore } from './playerInfoStore';
import { PlayerProfile } from './PlayerProfile';
import { PlayerTransferHistory } from './PlayerTransferHistory';

interface PlayerOverviewProps {
  playerId: string;
}

export const PlayerOverview = ({ playerId }: PlayerOverviewProps) => {
  const fetchById = usePlayerInfoStore((state) => state.fetchById);
  const clear = usePlayerInfoStore((state) => state.clear);
  const playerInfo = usePlayerInfoStore((state) => state.playerInfo);

  const profile = useMemo(() => playerInfo?.profile, [playerInfo]);
  const transferHistory = useMemo(() => playerInfo?.transferHistory, [playerInfo]);

  const { SPACING, APP_COLOR } = useTheme();

  useEffect(() => {
    fetchById(playerId);
    return () => {
      clear();
    };
  }, [clear, fetchById, playerId]);

  return (
    <ScrollView style={{ backgroundColor: APP_COLOR.WHITE }}>
      <FlexView direction="col" gap={SPACING.SM}>
        <PlayerProfile profile={profile} />
        <PlayerTransferHistory scrollEnabled={false} data={transferHistory} />
      </FlexView>
    </ScrollView>
  );
};
