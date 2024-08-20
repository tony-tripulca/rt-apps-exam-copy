import { IPlayer, IPlayerProfile, IPlayerTransferHistory } from './playerTypes';

export const PLAYER_TRANSFER_HISTORY: IPlayerTransferHistory[] = [
  {
    id: '1',
    date: {
      from: '2022',
      to: '2023',
    },
    to: {
      name: 'ACF Fiorentina',
      image:
        'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/teams/259.png&h=80',
    },
    transferFee: '€7.9M',
  },
  {
    id: '2',
    date: {
      from: '2022',
      to: '2023',
    },
    to: {
      name: 'ACF Fiorentina',
      image:
        'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/teams/259.png&h=80',
    },
    transferFee: 'Loan',
  },
  {
    id: '3',
    date: {
      from: '2021',
      to: '2022',
    },
    to: {
      name: 'Hellas Verona',
      image:
        'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/teams/651.png&h=80',
    },
    transferFee: '€6M',
  },
  {
    id: '4',
    date: {
      from: '2020',
      to: '2021',
    },
    to: {
      name: 'Hellas Verona',
      image:
        'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/teams/651.png&h=80',
    },
    transferFee: 'Loan',
  },
  {
    id: '5',
    date: {
      from: '2019',
      to: '2020',
    },
    to: {
      name: 'US Lecce',
      image:
        'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/teams/262.png&h=80',
    },
    transferFee: 'Loan',
  },
  {
    id: '6',
    date: {
      from: '2017',
      to: '2018',
    },
    to: {
      name: 'Udinese',
      image:
        'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/teams/56.png&h=80',
    },
    transferFee: '€3M',
  },
];

export const PLAYER_PROFILE: IPlayerProfile = {
  age: 29,
  birthDate: '3 Dec 1994',
  nationality: {
    name: 'CZE',
    flagImage:
      'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/flags/w40/cz.png',
  },
  height: '1.85 m',
  weight: '79 kg',
  team: {
    id: '1',
    name: 'Hellas Verona',
    image: 'https://static.footballtransfers.com/resources/teams/259.png',
    country: {
      name: 'ITA',
      flagImage:
        'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/flags/w40/it.png',
    },
    skillIndicator: '#709510',
    skill: '71.8',
    potential: '75.1',
    ETV: '€363.2M',
  },
  preferredFoot: 'Left',
  bestRole: 'AM',
  etvRange: {
    min: '€8M',
    max: '€10M',
  },
};

export const PLAYER_DATA: IPlayer = {
  // Header Info
  id: '1',
  name: 'Antonín Barák',
  image:
    'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/players/72684.png&h=200',
  country: {
    name: 'ITA',
    flagImage:
      'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/flags/w40/it.png',
  },
  skillIndicator: '#709510',
  skill: '69.3',
  potential: '69.3',
  ETV: '€8M',
  // Player Profile
  profile: PLAYER_PROFILE,
  // Transfer History
  transferHistory: PLAYER_TRANSFER_HISTORY,
};
