import { ICountry } from '../common';

export interface ITeam {
  id: string;
  name: string;
  image: string;
  country: ICountry;
  skillIndicator: string;
  skill: string;
  potential: string;
  ETV: string;
}

export interface ITeamSquadList {
  groups: ITeamSquadPlayerGroup[];
}

export interface ITeamSquadPlayerGroup {
  groupName: string;
  players: ITeamSquadPlayer[];
}

export interface ITeamSquadPlayer {
  skill: string;
  potential: string;
  picture: string;
  country: string;
  name: string;
  nameSubtitle: string;
  age: number;
  ETV: string;
}
