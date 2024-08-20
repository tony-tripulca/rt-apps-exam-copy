import { ICountry } from '../common';
import { ITeam } from '../team';

type Foot = 'Left' | 'Right' | 'Both';
type Role = 'GK' | 'CB' | 'LB' | 'RB' | 'DM' | 'CM' | 'AM' | 'LW' | 'RW' | 'ST';

export const PLAYER_ROLE: {
  [key in Role]: string;
} = {
  GK: 'Goalkeeper',
  CB: 'Centre Back',
  LB: 'Left Back',
  RB: 'Right Back',
  DM: 'Central Defensive Midfielder',
  CM: 'Central Midfielder',
  AM: 'Central Attacking Midfielder',
  LW: 'Left Winger',
  RW: 'Right Winger',
  ST: 'Striker',
};

export interface IPlayer {
  id: string;
  name: string;
  image: string;
  country: ICountry;
  skillIndicator: string;
  skill: string;
  potential: string;
  ETV: string;
  profile: IPlayerProfile;
  transferHistory?: IPlayerTransferHistory[];
}

export interface IPlayerProfile {
  age: number;
  birthDate?: string;
  nationality: ICountry;
  height: string;
  weight: string;
  team: ITeam;
  preferredFoot: Foot;
  bestRole: Role;
  etvRange: {
    min: string;
    max: string;
  };
}

export interface IPlayerTransferHistory {
  id: string;
  date: {
    from: string;
    to: string;
  };
  to: {
    name: string;
    image: string;
  };
  transferFee: string;
}
