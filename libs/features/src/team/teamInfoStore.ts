import { ITeam, fetchTeamById } from '@rt-apps/data';
import { create } from 'zustand';

type TeamInfoState = {
  teamInfo: ITeam | null;
};

type TeamInfoAction = {
  fetchById: (id: string) => Promise<void>;
  clear: () => void;
};

export const useTeamInfoStore = create<TeamInfoState & TeamInfoAction>()((set) => ({
  teamInfo: null,
  fetchById: async (id) => {
    const teamInfo = await fetchTeamById(id);

    set({ teamInfo });
  },
  clear: () => {
    set({ teamInfo: null });
  },
}));
