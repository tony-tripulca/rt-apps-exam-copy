import { FTHeaderInfo, SkeletonTeamInfoHeader } from '@rt-apps/ui-components';
import { useEffect } from 'react';
import { useTeamInfoStore } from './teamInfoStore';

export interface TeamInfoViewProps {
  teamId: string;
  height?: number;
}

export const TeamInfoHeader = ({ teamId, height = 155 }: TeamInfoViewProps) => {
  const team = useTeamInfoStore((state) => state.teamInfo);
  const fetchById = useTeamInfoStore((state) => state.fetchById);
  const clear = useTeamInfoStore((state) => state.clear);

  useEffect(() => {
    fetchById(teamId);

    return () => {
      clear();
    };
  }, [teamId, fetchById, clear]);

  if (!team) return <SkeletonTeamInfoHeader height={height} />;

  return <FTHeaderInfo info={team} height={height} />;
};
