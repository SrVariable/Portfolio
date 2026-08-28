export interface TerminalContext {
  close: () => void;
  clear: () => void;
  commandNames: string[];
}

export interface Command {
  name: string;
  run: (ctx: TerminalContext) => string | string[] | void;
}
