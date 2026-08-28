import type { Command, TerminalContext } from '../types';

export const exit: Command = {
  name: 'exit',
  run: (ctx: TerminalContext) => {
    ctx.close();
    return [];
  },
};
