import { SQUAD_DATA, TEAM_DATA } from './teamData';
import { ITeam, ITeamSquadList } from './teamTypes';

export const fetchTeamById = async (id: string) => {
  console.log(`Fetch team by id: ${id}`);

  return new Promise<ITeam>((resolve, reject) => {
    setTimeout(() => {
      resolve(TEAM_DATA);
    }, 1000);
  });
};

export const fetchTeamSquadListById = async (id: string) => {
  console.log(`Fetch team squad list by id: ${id}`);

  return new Promise<ITeamSquadList>((resolve, reject) => {
    setTimeout(() => {
      resolve(SQUAD_DATA);
    }, 1000);
  });
};
