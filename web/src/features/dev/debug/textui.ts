import { TextUiProps } from '../../../typings';
import { debugData } from '../../../utils/debugData';

export const debugTextUI = () => {
  debugData<TextUiProps>(
    [
      {
        action: 'textUi',
        data: {
          text: 'UI Demo  \n The 305 — Miami night, chrome script, pink + aqua.',
          position: 'top-center',
          icon: 'circle-info',
        },
      },
    ],
    100
  );
};
