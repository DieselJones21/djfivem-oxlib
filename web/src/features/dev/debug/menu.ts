import { debugData } from '../../../utils/debugData';
import { MenuSettings } from '../../../typings';

export const debugMenu = () => {
  debugData<MenuSettings>(
    [
      {
        action: 'setMenu',
        data: {
          title: 'Street Market',
          items: [
            {
              label: 'Bandage Roll',
              progress: 78,
              icon: 'bandage',
              description: 'Street meds with a clean wrap.',
              colorScheme: 'envy',
            },
            {
              label: 'Police Scanner',
              icon: 'walkie-talkie',
              description: 'Keep an ear on the heat.',
              checked: true,
            },
            {
              label: 'Fake Plate',
              values: ['Clean run', 'Out of town', 'Burner steel'],
              icon: 'car',
              description: 'Cycle plates without leaving the block.',
            },
            {
              label: 'Phone Burner',
              values: ['Cheap chip', 'Encrypted', 'One-hop'],
              icon: 'mobile',
              description: 'Disposable line for quiet work.',
            },
            {
              label: 'Lockpick Set',
              icon: 'key',
              description: 'Quiet entry kit.',
            },
          ],
        },
      },
    ],
    100
  );
};
