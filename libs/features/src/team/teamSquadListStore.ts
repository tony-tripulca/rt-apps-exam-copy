import { ITeamSquadList, fetchTeamSquadListById } from '@rt-apps/data';
import { create } from 'zustand';

type TeamSquadListState = {
  squadList: ITeamSquadList | null;
};

type TeamSquadListAction = {
  fetchById: (id: string) => Promise<void>;
  clear: () => void;
};

export const useTeamSquadListStore = create<TeamSquadListState & TeamSquadListAction>()((set) => ({
  squadList: null,
  fetchById: async (id) => {
    const squadList = await fetchTeamSquadListById(id);

    set({ squadList });
  },
  clear: () => {
    set({ squadList: null });
  },
}));
