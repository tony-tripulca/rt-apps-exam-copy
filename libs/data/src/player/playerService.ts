import { PLAYER_DATA } from './playerData';
import { IPlayer } from './playerTypes';

export const fetchPlayerById = async (id: string) => {
  console.log(`Fetch player data by id: ${id}`);

  return new Promise<IPlayer>((resolve, reject) => {
    setTimeout(() => {
      resolve(PLAYER_DATA);
    }, 1000);
  });
};
