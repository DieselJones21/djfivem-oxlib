import { TextUiProps } from '../../../typings';
import { debugData } from '../../../utils/debugData';

export const debugTextUI = () => {
  debugData<TextUiProps>(
    [
      {
        action: 'textUi',
        data: {
          text: 'UI Demo  \n Black panels, teal accents, silver chrome edges.',
          position: 'top-center',
          icon: 'circle-info',
        },
      },
    ],
    100
  );
};
