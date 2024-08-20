import { FTHeaderInfo, SkeletonPlayerInfoHeader } from '@rt-apps/ui-components';
import { useEffect } from 'react';
import { usePlayerInfoStore } from './playerInfoStore';

export interface PlayerInfoViewProps {
  playerId: string;
  height?: number;
}

export const PlayerInfoHeader = ({ playerId, height = 155 }: PlayerInfoViewProps) => {
  const fetchById = usePlayerInfoStore((state) => state.fetchById);
  const clear = usePlayerInfoStore((state) => state.clear);

  const playerInfo = usePlayerInfoStore((state) => state.playerInfo);

  useEffect(() => {
    fetchById(playerId);

    return () => {
      clear();
    };
  }, [playerId, fetchById, clear]);

  if (!playerInfo) {
    return <SkeletonPlayerInfoHeader height={height} />;
  }

  return <FTHeaderInfo info={playerInfo} height={height} />;
};
