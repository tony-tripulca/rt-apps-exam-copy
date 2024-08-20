import { ITeamSquadList } from '@rt-apps/data';
import { SectionList } from 'react-native';
import {
  TeamSquadPlayerInfoDisplay,
  TeamSquadSkillDisplay,
  TeamSquadSkillIndicator,
} from './TeamSquadListItem';
import {
  TableHeader,
  TableRow,
  FlexView,
  FlexAlignment,
  Typography,
  FTTransferLabel,
} from '../common';

export const TeamSquadList = (data: ITeamSquadList) => {
  const sections = data.groups.map((group) => ({
    title: group.groupName,
    data: group.players,
  }));

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <TableRow key={index} align={[FlexAlignment.ALIGN_CENTER]} isOddRow={index % 2 === 0}>
          <FlexView width="60%" height="100%">
            <TeamSquadSkillIndicator {...item} />
            <FlexView align={[FlexAlignment.ALIGN_CENTER]}>
              <TeamSquadSkillDisplay {...item} />
              <TeamSquadPlayerInfoDisplay {...item} />
            </FlexView>
          </FlexView>
          <FlexView width="40%" align={[FlexAlignment.ALIGN_CENTER, FlexAlignment.SPACE_BETWEEN]}>
            <Typography align="right" width="30%">
              {item.age}
            </Typography>
            <FTTransferLabel variant="body2" value={item.ETV} />
          </FlexView>
        </TableRow>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <TableHeader variant="body2" headers={[{ name: title }]} />
      )}
      stickySectionHeadersEnabled={false}
    />
  );
};
