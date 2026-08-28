import type { Command, TerminalContext } from '../types';

export const help: Command = {
  name: 'help',
  run: (ctx: TerminalContext) => {
    const commands = ctx.commandNames.join('    ');
    return [
      'Comandos disponibles:',
      `  ${commands}`,
    ];
  },
};
