import { setupWorker } from 'msw';
import { handlers } from './handlers';

/** Worker MSW para o browser (CRA). */
export const worker = setupWorker(...handlers);
