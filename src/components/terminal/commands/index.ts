import type { Command } from '../types';
import { help } from './help';
import { whoami } from './whoami';
import { exit } from './exit';
import { clear } from './clear';

export const commands: Record<string, Command> = {
  help,
  whoami,
  exit,
  clear,
};

export const commandNames = Object.keys(commands);
