import { ContextMenuProps } from '../../../typings';
import { debugData } from '../../../utils/debugData';

export const debugContext = () => {
  debugData<ContextMenuProps>(
    [
      {
        action: 'showContext',
        data: {
          title: 'Street Actions',
          options: [
            {
              title: 'Call Taxi',
              description: 'Send a cab to your block.',
              icon: 'taxi',
              arrow: true,
            },
            {
              title: 'Check Warrants',
              description: 'See who is still hunting this name.',
              icon: 'shield-halved',
              progress: 64,
              colorScheme: 'envy',
            },
            {
              title: 'Radio Check',
              description: 'Ping the crew without lighting up the city.',
              icon: 'walkie-talkie',
            },
            {
              title: 'Street Code',
              description: 'Read the block rules before you move.',
              icon: 'book',
              arrow: true,
            },
            {
              title: 'Garage Access',
              description: 'Locked by manager approval.',
              icon: 'warehouse',
              disabled: true,
            },
            {
              title: 'Drop Marker',
              description: 'Leave a quiet pin for the next run.',
              icon: 'location-dot',
            },
          ],
        },
      },
    ],
    100
  );
};
