import { debugData } from '../../../utils/debugData';
import { ProgressbarProps } from '../../../typings';

export const debugProgressbar = () => {
  debugData<ProgressbarProps>(
    [
      {
        action: 'progress',
        data: {
          label: 'Running layered ox_lib preview',
          duration: 30000,
        },
      },
    ],
    100
  );
};

export const debugCircleProgressbar = () => {
  debugData([
    {
      action: 'circleProgress',
      data: {
        duration: 8000,
        label: 'Using Armour',
      },
    },
  ]);
};
