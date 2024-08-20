import { IPlayer, fetchPlayerById } from '@rt-apps/data';
import { create } from 'zustand';

type PlayerInfoState = {
  playerInfo: IPlayer | null;
};

type PlayerInfoAction = {
  fetchById: (id: string) => Promise<void>;
  clear: () => void;
};

export const usePlayerInfoStore = create<PlayerInfoState & PlayerInfoAction>()((set) => ({
  playerInfo: null,
  fetchById: async (id) => {
    const playerInfo = await fetchPlayerById(id);

    set({ playerInfo });
  },
  clear: () => {
    set({ playerInfo: null });
  },
}));
