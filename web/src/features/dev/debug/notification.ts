import { NotificationProps } from '../../../typings';
import { debugData } from '../../../utils/debugData';

export const debugCustomNotification = () => {
  debugData<NotificationProps>(
    [
      {
        action: 'notify',
        data: {
          title: 'UI Demo',
          description: 'Envy cyan chrome overlay is live.  \nKeep the glow tight and the streets louder.',
          type: 'inform',
          position: 'top-center',
          duration: 20000,
        },
      },
    ],
    100
  );
};
