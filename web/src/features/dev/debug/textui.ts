import { TextUiProps } from '../../../typings';
import { debugData } from '../../../utils/debugData';

export const debugTextUI = () => {
  debugData<TextUiProps>(
    [
      {
        action: 'textUi',
        data: {
          text: 'UI Demo  \n Hold the look: cyan chrome, black glass, neon edge.',
          position: 'top-center',
          icon: 'circle-info',
        },
      },
    ],
    100
  );
};
