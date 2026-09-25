import { setupServer } from 'msw/node';
import { handlers } from './handlers';

/** Server MSW para testes Jest. */
export const server = setupServer(...handlers);
