import { ITeam, ICountry, IPlayer } from '@rt-apps/data';
import { useTheme } from '@rt-apps/theming';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { BackgroundImage } from './BackgroundImage';
import { FTTransferLabel } from './FTTransferLabel';
import { ImagePreview } from './ImagePreview';
import { Typography } from './Typography';
import { FlexAlignment, FlexView } from './Flexbox';

export interface HeaderInfoProps {
  info: IPlayer | ITeam;
  height?: number;
}

export const FTHeaderInfo = ({ info, height }: HeaderInfoProps) => {
  const { SPACING } = useTheme();

  const image = {
    uri: 'https://www.footballtransfers.com/images/Desktop.webp',
  };

  return (
    <BackgroundImage uri={image.uri}>
      <FlexView
        direction="col"
        align={[FlexAlignment.ALIGN_CENTER]}
        padding={SPACING.MD}
        height={height}
      >
        <FlexView align={[FlexAlignment.ALIGN_CENTER]} gap={SPACING.XS}>
          <ImagePreview uri={info.image} width={50} height={50} rounded />
          <Typography variant="h1" color="white">
            {info.name}
          </Typography>
        </FlexView>
        <FlexView align={[FlexAlignment.ALIGN_CENTER]}>
          <Country country={info.country} />
          <Skill
            skill={info.skill}
            skillIndicator={info.skillIndicator}
            potential={info.potential}
          />
        </FlexView>
        <FTTransferLabel value={info.ETV} variant="h1" size="md" />
      </FlexView>
    </BackgroundImage>
  );
};

interface CountryProps {
  country: ICountry;
  style?: StyleProp<ViewStyle>;
}

export const Country = ({ country, style }: CountryProps) => {
  return (
    <FlexView align={[FlexAlignment.ALIGN_CENTER]} gap={6} style={style}>
      <ImagePreview uri={country.flagImage} width={12} height={12} />
      <Typography variant="body2" color="white">
        {country.name}
      </Typography>
    </FlexView>
  );
};

interface SkillProps {
  skillIndicator: string;
  skill: string;
  potential: string;
}

export const Skill = ({ skillIndicator, skill, potential }: SkillProps) => {
  const { FONT_COLOR } = useTheme();

  return (
    <FlexView align={[FlexAlignment.ALIGN_CENTER]} gap={6}>
      <SkillIndicator color={skillIndicator} size="sm" />
      <Typography color="white">Skill: {skill}</Typography>
      <Typography color={FONT_COLOR.GREY}>Pot: {potential}</Typography>
    </FlexView>
  );
};

export const SkillIndicator = ({
  color,
  size = 'sm',
}: {
  color: string;
  size: 'sm' | 'md' | 'lg';
}) => {
  const dimension = {
    sm: 10,
    md: 20,
    lg: 30,
  };

  const styles = StyleSheet.create({
    skillIndicator: {
      width: dimension[size],
      height: dimension[size],
      borderRadius: 9999,
      backgroundColor: color,
    },
  });

  return <FlexView style={styles.skillIndicator} />;
};
