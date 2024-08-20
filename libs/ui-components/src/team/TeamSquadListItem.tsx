import { ITeamSquadPlayer } from '@rt-apps/data';
import { useTheme } from '@rt-apps/theming';
import { FlexAlignment, FlexView, FTTransferLabel, Typography } from '../common';
import { PlayerFlagImage, PlayerTitleSubtitle } from '../player';

export const TeamSquadSkillDisplay = ({ skill, potential }: ITeamSquadPlayer) => {
  const { FONT_COLOR } = useTheme();

  return (
    <FlexView direction="col">
      <Typography variant="body2">{skill}</Typography>
      <Typography variant="body2" color={FONT_COLOR.SECONDARY}>
        {potential}
      </Typography>
    </FlexView>
  );
};

interface TeamSquadSkillIndicatorProps {
  skill: string;
}

export const TeamSquadSkillIndicator = ({ skill }: TeamSquadSkillIndicatorProps) => {
  const skillNumber = Number(skill);

  const red = [180, 0, 0]; // Darker red
  const yellow = [180, 180, 0]; // Darker yellow
  const green = [0, 180, 0]; // Darker green

  let rgb;

  if (skillNumber <= 50) {
    const t = skillNumber / 50;
    rgb = red.map((start, i) => Math.round(start + t * (yellow[i] - start)));
  } else {
    const t = (skillNumber - 50) / 50;
    rgb = yellow.map((start, i) => Math.round(start + t * (green[i] - start)));
  }

  const backgroundColor = `rgb(${rgb.join(',')})`;

  return (
    <FlexView
      width={2}
      height="100%"
      backgroundColor={backgroundColor}
      style={{ marginRight: 4 }}
    />
  );
};

export const TeamSquadPlayerInfoDisplay = (item: ITeamSquadPlayer) => {
  return (
    <FlexView align={[FlexAlignment.ALIGN_CENTER]} gap={8}>
      <TeamSquadPlayerImageDisplay {...item} />
      <TeamSquadPlayerNameDisplay {...item} />
    </FlexView>
  );
};

export const TeamSquadPlayerImageDisplay = ({
  picture: playerPicture,
  country: playerCountry,
}: ITeamSquadPlayer) => {
  return (
    <PlayerFlagImage
      player={{ img: playerPicture, rounded: true }}
      country={{ img: playerCountry, rounded: true }}
    />
  );
};

export const TeamSquadPlayerNameDisplay = ({
  name: playerName,
  nameSubtitle: playerNameSubtext,
}: ITeamSquadPlayer) => {
  return <PlayerTitleSubtitle title={playerName} subtitle={playerNameSubtext} />;
};

export const TeamSquadPlayerAgeDisplay = ({ age: playerAge }: ITeamSquadPlayer) => (
  <Typography variant="body1">{playerAge}</Typography>
);

export const TeamSquadPlayerETVDisplay = ({ ETV: playerETV }: ITeamSquadPlayer) => (
  <FTTransferLabel variant="body2" value={playerETV} />
);
