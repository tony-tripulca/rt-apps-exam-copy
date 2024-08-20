import { FlexAlignment, FlexView, ImagePreview, Typography } from '../common';

interface PlayerFlagImageProps {
  player: {
    img: string;
    rounded?: boolean;
  };
  country: {
    img: string;
    rounded?: boolean;
  };
}

export const PlayerFlagImage = ({ player, country }: PlayerFlagImageProps) => {
  return (
    <FlexView>
      <ImagePreview uri={player.img} width={50} height={50} rounded={player.rounded} />
      <ImagePreview
        uri={country.img}
        rounded={country.rounded}
        width={14}
        height={14}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
      />
    </FlexView>
  );
};

interface PlayerTitleSubtitleProps {
  title: string;
  subtitle: string;
}

export const PlayerTitleSubtitle = ({ title, subtitle }: PlayerTitleSubtitleProps) => {
  return (
    <FlexView direction="col" align={[FlexAlignment.JUSTIFY_CENTER]}>
      <Typography variant="body2">{title}</Typography>
      <Typography variant="caption">{subtitle}</Typography>
    </FlexView>
  );
};
