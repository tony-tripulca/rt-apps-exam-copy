import { ITeam, ITeamSquadList } from './teamTypes';

export const TEAM_DATA: ITeam = {
  id: '1',
  name: 'Juventus FC',
  image:
    'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/teams/45.png&h=200',
  country: {
    name: 'ITA',
    flagImage:
      'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/flags/w40/it.png',
  },
  skillIndicator: '#709510',
  skill: '71.8',
  potential: '75.1',
  ETV: '€363.2M',
};

export const SQUAD_DATA: ITeamSquadList = {
  groups: [
    {
      groupName: 'Keepers',
      players: [
        {
          skill: '41.3',
          potential: '41.3',
          picture:
            'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/players/478.png&h=120',
          country:
            'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/flags/w40/it.png',
          name: 'Keepers 1',
          nameSubtitle: 'Player Subtitle',
          age: 30,
          ETV: '€0.3M',
        },
        {
          skill: '64.9',
          potential: '64.9',
          picture:
            'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/players/478.png&h=120',
          country:
            'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/flags/w40/it.png',
          name: 'Keepers 2',
          nameSubtitle: 'Player Subtitle',
          age: 30,
          ETV: '€0.3M',
        },
        {
          skill: '75.2',
          potential: '75.3',
          picture:
            'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/players/478.png&h=120',
          country:
            'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/flags/w40/it.png',
          name: 'Keepers 3',
          nameSubtitle: 'Player Subtitle',
          age: 30,
          ETV: '€0.3M',
        },
      ],
    },
    {
      groupName: 'Middenvelders',
      players: [
        {
          skill: '75.3',
          potential: '79.8',
          picture:
            'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/players/478.png&h=120',
          country:
            'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/flags/w40/it.png',
          name: 'Middenvelders 1',
          nameSubtitle: 'Player Subtitle',
          age: 30,
          ETV: '€0.3M',
        },
        {
          skill: '79.9',
          potential: '79.9',
          picture:
            'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/players/478.png&h=120',
          country:
            'https://images.footballtransfers.com/?url=https://static.footballtransfers.com/resources/flags/w40/it.png',
          name: 'Middenvelders 2',
          nameSubtitle: 'Player Subtitle',
          age: 30,
          ETV: '€0.3M',
        },
      ],
    },
  ],
};
