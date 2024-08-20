import { ICountry, IPlayerProfile, ITeam, PLAYER_ROLE } from '@rt-apps/data';
import { useTheme } from '@rt-apps/theming';
import {
  FlexAlignment,
  FlexView,
  ImagePreview,
  SkeletonPlayerProfile,
  Spacing,
  Typography,
} from '@rt-apps/ui-components';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export const PlayerProfile = ({ profile }: { profile?: IPlayerProfile }) => {
  const { SPACING, APP_COLOR } = useTheme();

  return (
    <FlexView direction="col">
      <Typography variant="h2" color={APP_COLOR.THEME_DARK} style={{ padding: SPACING.SM }}>
        Profile
      </Typography>

      {!profile ? (
        <SkeletonPlayerProfile />
      ) : (
        <FlexView
          direction="col"
          gap={SPACING.SM}
          padding={Spacing.SM}
          backgroundColor={APP_COLOR.OFF_WHITE}
        >
          <FlexView align={[FlexAlignment.SPACE_AROUND, FlexAlignment.ALIGN_START]}>
            <Label label="Age" style={{ width: '50%' }}>
              <Typography>{`${profile.age} years old (${profile.birthDate})`}</Typography>
            </Label>
            <Label label="Best Playing Role" style={{ width: '50%' }}>
              <Typography>{PLAYER_ROLE[profile.bestRole]}</Typography>
            </Label>
          </FlexView>

          <FlexView align={[FlexAlignment.SPACE_BETWEEN, FlexAlignment.JUSTIFY_START]}>
            <Label label="Nationality" style={{ width: '50%' }}>
              <Nationality country={profile.nationality} />
            </Label>
            <Label label="Preferred foot" style={{ width: '50%' }}>
              <Typography>{profile.preferredFoot}</Typography>
            </Label>
          </FlexView>

          <FlexView align={[FlexAlignment.SPACE_BETWEEN, FlexAlignment.JUSTIFY_START]}>
            <Label label="Height" style={{ width: '50%' }}>
              <Typography>{profile.height}</Typography>
            </Label>
            <Label label="Weight" style={{ width: '50%' }}>
              <Typography>{profile.weight}</Typography>
            </Label>
          </FlexView>

          <FlexView align={[FlexAlignment.SPACE_BETWEEN, FlexAlignment.JUSTIFY_START]}>
            <Label label="Team" style={{ width: '50%' }}>
              <Team team={profile.team} />
            </Label>
            <Label label="ETV Range" style={{ width: '50%' }}>
              <Typography>
                {profile.etvRange.min} - ${profile.etvRange.max}
              </Typography>
            </Label>
          </FlexView>
        </FlexView>
      )}
    </FlexView>
  );
};

const Label = ({
  label,
  children,
  style,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  const { SPACING, FONT_COLOR } = useTheme();

  const labelType = typeof label;

  return (
    <FlexView direction="col" gap={SPACING.XS} style={style}>
      {labelType === 'string' ? (
        <Typography weight="BOLD" color={FONT_COLOR.SECONDARY}>
          {label}
        </Typography>
      ) : (
        label
      )}

      {children}
    </FlexView>
  );
};

const Nationality = ({ country, style }: { country: ICountry; style?: StyleProp<ViewStyle> }) => {
  return (
    <FlexView align={[FlexAlignment.ALIGN_CENTER]} gap={6} style={style}>
      <ImagePreview uri={country.flagImage} width={14} height={14} />
      <Typography>{country.name}</Typography>
    </FlexView>
  );
};

const Team = ({ team, style }: { team: ITeam; style?: StyleProp<ViewStyle> }) => {
  return (
    <FlexView align={[FlexAlignment.ALIGN_CENTER]} gap={6} style={style}>
      <ImagePreview uri={team.image} width={16} height={16} />
      <Typography>{team.name}</Typography>
    </FlexView>
  );
};
