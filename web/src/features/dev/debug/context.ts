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
            {
              title: 'Open Inventory',
              description: 'Check pockets, bags, and the trunk.',
              icon: 'briefcase',
              arrow: true,
            },
            {
              title: 'Emote Wheel',
              description: 'Lean, wave, or hold the corner.',
              icon: 'face-smile',
            },
            {
              title: 'Billing',
              description: 'Send or collect a street invoice.',
              icon: 'file-invoice-dollar',
            },
            {
              title: 'Vehicle Options',
              description: 'Doors, engine, and extras.',
              icon: 'car',
              arrow: true,
            },
            {
              title: 'Clothing',
              description: 'Swap the fit without leaving the block.',
              icon: 'shirt',
            },
            {
              title: 'Keybinds',
              description: 'Review the controls you actually use.',
              icon: 'keyboard',
            },
            {
              title: 'Report Issue',
              description: 'Flag a bug without breaking character.',
              icon: 'flag',
            },
            {
              title: 'Leave Area',
              description: 'Walk off and close this menu.',
              icon: 'door-open',
            },
            {
              title: 'Crew Status',
              description: 'Who is on the block right now.',
              icon: 'users',
              metadata: ['Active: 6', 'Idle: 2', 'Heat: Low'],
            },
            {
              title: 'Safehouse',
              description: 'Doors, cameras, and stash access.',
              icon: 'house-lock',
              arrow: true,
              progress: 42,
            },
            {
              title: 'Dispatch Log',
              description: 'Last ten hits from the scanner.',
              icon: 'list',
            },
            {
              title: 'Close Menu',
              description: 'Put the phone away.',
              icon: 'xmark',
            },
          ],
        },
      },
    ],
    100
  );
};
