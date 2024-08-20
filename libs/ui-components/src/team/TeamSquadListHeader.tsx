import { TableHeader } from '../common';

export const TeamSquadListHeader = () => {
  return (
    <TableHeader
      headers={[
        { name: 'Skill/pot', width: '16%' },
        { name: 'Speler', width: '44%' },
        { name: 'Leeftijd', width: '20%' },
        { name: 'ETV', width: '20%', style: { justifyContent: 'flex-end' } },
      ]}
    />
  );
};
