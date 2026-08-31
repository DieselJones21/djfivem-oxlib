import { debugContext } from './context';
import { debugMenu } from './menu';
import { debugCustomNotification } from './notification';
import { debugProgressbar } from './progress';
import { debugTextUI } from './textui';

export const debugEnvyShowcase = () => {
  debugMenu();
  debugContext();
  debugCustomNotification();
  debugProgressbar();
  debugTextUI();
};
