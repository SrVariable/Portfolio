import type { Command, TerminalContext } from '../types';

export const clear: Command = {
  name: 'clear',
  run: (ctx: TerminalContext) => {
    ctx.clear();
    return [];
  },
};
