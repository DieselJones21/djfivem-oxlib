import { TextUiProps } from '../../../typings';
import { debugData } from '../../../utils/debugData';

export const debugTextUI = () => {
  debugData<TextUiProps>(
    [
      {
        action: 'textUi',
        data: {
          text: 'UI Demo  \n Rebel Roleplay — chrome script, black steel, red cut.',
          position: 'top-center',
          icon: 'circle-info',
        },
      },
    ],
    100
  );
};
