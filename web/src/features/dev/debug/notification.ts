import { NotificationProps } from '../../../typings';
import { debugData } from '../../../utils/debugData';

export const debugCustomNotification = () => {
  debugData<NotificationProps>(
    [
      {
        action: 'notify',
        data: {
          title: 'UI Demo',
          description: 'Rebel Roleplay chrome overlay is live.',
          type: 'inform',
          position: 'top-center',
          duration: 20000,
        },
      },
    ],
    100
  );
};
