import { NotificationProps } from '../../../typings';
import { debugData } from '../../../utils/debugData';

export const debugCustomNotification = () => {
  debugData<NotificationProps>(
    [
      {
        action: 'notify',
        data: {
          title: 'UI Demo',
          description: 'The 305 Miami overlay is live — palms, chrome, and ocean night.',
          type: 'inform',
          position: 'top-center',
          duration: 20000,
        },
      },
    ],
    100
  );
};
