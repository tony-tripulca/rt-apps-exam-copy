import { useTheme } from '@rt-apps/theming';
import { FlexView, ImagePreview } from '@rt-apps/ui-components';
import { StatusBar } from 'react-native';

export const LogoHeader = () => {
  const { APP_COLOR } = useTheme();

  return (
    <FlexView>
      <StatusBar barStyle="light-content" backgroundColor={APP_COLOR.BACKGROUND} />
      <ImagePreview
        uri="https://www.footballtransfers.com/images/ft_ico.png"
        width={30}
        height={20}
      />
    </FlexView>
  );
};
