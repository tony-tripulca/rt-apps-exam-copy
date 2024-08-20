import { Path, Svg } from 'react-native-svg';
import { FlexAlignment, FlexView } from './Flexbox';
import { FontVariant, Typography } from './Typography';

interface FTTransferLabelProps {
  value: string;
  variant?: FontVariant;
  size?: 'sm' | 'md' | 'lg';
}

const FTTransferLabelPrefix = ({ size = 24, fill = '#a5d4d4' }) => (
  <Svg width={size} height={size} viewBox="0 0 1024 1024" fill="none">
    <Path
      fill={fill}
      d="M589.041 1024h434.959v-1024h-58.278c-81.434 0.007-150.946 51.040-178.31 122.865l-0.439 1.309-287.322 771.132c-23.191 62.343 22.889 128.693 89.389 128.693z"
    />
  </Svg>
);

const FTTransferLabelSuffix = ({ size = 24, fill = '#a5d4d4' }) => (
  <Svg width={size} height={size} viewBox="0 0 1024 1024" fill="none">
    <Path
      fill={fill}
      d="M607.172 577.024l-373.971 401.408c-26.182 28.061-63.376 45.557-104.657 45.568h-128.544v-1024h128.512c41.294 0.002 78.5 17.5 104.611 45.484l0.077 0.084 373.941 401.378c15.861 16.987 25.599 39.868 25.599 65.024s-9.738 48.036-25.651 65.079l0.051-0.056z"
    />
  </Svg>
);

export interface FTTransferLabelColor {
  GREEN: string;
  GREY: string;
}

export const FT_TRANSFER_LABEL_COLOR: FTTransferLabelColor = {
  GREEN: '#a5d4d4',
  GREY: '',
};

export const FTTransferLabel = ({
  value,
  variant = 'body1',
  size = 'sm',
}: FTTransferLabelProps) => {
  const fs = {
    sm: 24,
    md: 38,
    lg: 52,
  };

  return (
    <FlexView align={[FlexAlignment.ALIGN_CENTER]}>
      <FTTransferLabelPrefix size={fs[size]} fill={FT_TRANSFER_LABEL_COLOR.GREEN} />
      <FlexView
        align={[FlexAlignment.ALIGN_CENTER]}
        backgroundColor={FT_TRANSFER_LABEL_COLOR.GREEN}
        padding={0}
        height={fs[size]}
      >
        <Typography variant={variant}>{value}</Typography>
      </FlexView>
      <FTTransferLabelSuffix size={fs[size]} fill={FT_TRANSFER_LABEL_COLOR.GREEN} />
    </FlexView>
  );
};

export default FTTransferLabel;
