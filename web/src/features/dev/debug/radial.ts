import { debugData } from '../../../utils/debugData';
import type { RadialMenuItem } from '../../../typings';

export const debugRadial = () => {
  debugData<{ items: RadialMenuItem[]; sub?: boolean }>(
    [
      {
        action: 'openRadialMenu',
        data: {
          items: [
            { icon: 'palette', label: 'Paint' },
            { icon: 'warehouse', label: 'Garage' },
            { icon: 'car', label: 'Vehicle' },
            { icon: 'user', label: 'Citizen' },
            { icon: 'location-dot', label: 'Marker' },
            { icon: 'radio', label: 'Radio' },
          ],
        },
      },
    ],
    100
  );
};
