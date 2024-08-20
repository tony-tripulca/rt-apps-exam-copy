import {
  SkeletonTeamSquadList,
  SkeletonTeamSquadListHeader,
  TeamSquadList,
  TeamSquadListHeader,
} from '@rt-apps/ui-components';
import { useEffect } from 'react';
import { useTeamSquadListStore } from './teamSquadListStore';

interface TeamSquadListProps {
  teamId: string;
}

export const TeamSquadListView = ({ teamId }: TeamSquadListProps) => {
  const fetchById = useTeamSquadListStore((state) => state.fetchById);
  const clear = useTeamSquadListStore((state) => state.clear);

  const squadList = useTeamSquadListStore((state) => state.squadList?.groups);

  useEffect(() => {
    fetchById(teamId);

    return () => {
      clear();
    };
  }, [clear, fetchById, teamId]);

  return (
    <>
      <TeamSquadListHeader />
      {!squadList ? (
        <>
          <SkeletonTeamSquadListHeader />
          <SkeletonTeamSquadList />
        </>
      ) : (
        <TeamSquadList groups={squadList} />
      )}
    </>
  );
};
