import { debugData } from '../../../utils/debugData';
import { ProgressbarProps } from '../../../typings';

export const debugProgressbar = () => {
  debugData<ProgressbarProps>(
    [
      {
        action: 'progress',
        data: {
          label: 'Cruising Ocean Drive',
          duration: 30000,
        },
      },
    ],
    100
  );
};

export const debugCircleProgressbar = () => {
  debugData(
    [
      {
        action: 'circleProgress',
        data: {
          duration: 12000,
          label: 'Using Armour',
        },
      },
    ],
    100
  );
};
