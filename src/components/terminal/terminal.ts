import type { TerminalContext } from './types';
import { commands, commandNames } from './commands/index';

let lastFocusedEl: HTMLElement | null = null;

function isDesktopPointer(): boolean {
  return (
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    window.matchMedia('(min-width: 768px)').matches
  );
}

const WRAP_CLASSES = 'whitespace-pre-wrap break-all';

function printLine(logEl: HTMLDivElement, outputEl: HTMLDivElement, text: string, cls = ''): void {
  const div = document.createElement('div');
  div.className = cls ? `${WRAP_CLASSES} ${cls}` : WRAP_CLASSES;
  div.textContent = text;
  outputEl.appendChild(div);
  logEl.scrollTop = logEl.scrollHeight;
}

function printCommandEcho(logEl: HTMLDivElement, outputEl: HTMLDivElement, cmd: string): void {
  const div = document.createElement('div');
  div.className = `${WRAP_CLASSES} text-accent-soft`;
  div.textContent = `srvariable@portfolio:~$ ${cmd}`;
  outputEl.appendChild(div);
  logEl.scrollTop = logEl.scrollHeight;
}

function printInterrupt(logEl: HTMLDivElement, outputEl: HTMLDivElement, typed: string): void {
  const div = document.createElement('div');
  div.className = `${WRAP_CLASSES} text-accent-soft`;
  div.textContent = `srvariable@portfolio:~$ ${typed}^C`;
  outputEl.appendChild(div);
  logEl.scrollTop = logEl.scrollHeight;
}

function clearOutput(logEl: HTMLDivElement, outputEl: HTMLDivElement): void {
  outputEl.innerHTML = '';
  logEl.scrollTop = 0;
}

function runCommand(logEl: HTMLDivElement, outputEl: HTMLDivElement, raw: string, ctx: TerminalContext): void {
  const cmd = raw.trim();
  printCommandEcho(logEl, outputEl, cmd);

  if (!cmd) return;

  const command = commands[cmd.toLowerCase()];
  if (!command) {
    printLine(logEl, outputEl, `comando no encontrado: ${cmd}`, 'text-fg-subtle');
    return;
  }

  const result = command.run(ctx);
  const lines = Array.isArray(result) ? result : result ? [result] : [];
  for (const line of lines) {
    if (line) printLine(logEl, outputEl, line);
  }
}

function moveCaretToEnd(el: HTMLElement): void {
  const range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
}

function focusInput(inputEl: HTMLElement): void {
  inputEl.focus();
  moveCaretToEnd(inputEl);
}

function autocomplete(inputEl: HTMLElement): void {
  const typed = (inputEl.textContent ?? '').trim().toLowerCase();
  if (!typed) return;

  const matches = commandNames.filter((name) => name.startsWith(typed));
  if (matches.length !== 1) return;

  inputEl.textContent = matches[0];
  moveCaretToEnd(inputEl);
}

function resetTerminal(logEl: HTMLDivElement, outputEl: HTMLDivElement): void {
  clearOutput(logEl, outputEl);
  printLine(logEl, outputEl, 'Escribe "help" para ver los comandos disponibles.');
}

function openTerminal(
  overlay: HTMLDivElement,
  inputEl: HTMLElement,
  logEl: HTMLDivElement,
  outputEl: HTMLDivElement,
): void {
  lastFocusedEl = document.activeElement as HTMLElement | null;
  overlay.hidden = false;
  resetTerminal(logEl, outputEl);
  inputEl.textContent = '';
  focusInput(inputEl);
  logEl.scrollTop = logEl.scrollHeight;
}

function closeTerminal(overlay: HTMLDivElement): void {
  overlay.hidden = true;
  lastFocusedEl?.focus();
}

export function initTerminal(): void {
  const overlay = document.getElementById('terminal-overlay') as HTMLDivElement;
  const logEl = document.getElementById('terminal-log') as HTMLDivElement;
  const outputEl = document.getElementById('terminal-output') as HTMLDivElement;
  const inputEl = document.getElementById('terminal-input') as HTMLElement;
  const windowEl = document.getElementById('terminal-window') as HTMLDivElement;

  if (!overlay || !logEl || !outputEl || !inputEl || !windowEl) {
    console.error('Terminal elements not found');
    return;
  }

  resetTerminal(logEl, outputEl);

  const ctx: TerminalContext = {
    close: () => closeTerminal(overlay),
    clear: () => clearOutput(logEl, outputEl),
    commandNames,
  };

  window.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === 'F2') {
      if (!isDesktopPointer()) return;
      e.preventDefault();
      if (overlay.hidden) {
        openTerminal(overlay, inputEl, logEl, outputEl);
      }
      return;
    }

    if (!overlay.hidden && e.key === 'Escape') {
      e.preventDefault();
      closeTerminal(overlay);
    }
  });

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      autocomplete(inputEl);
      return;
    }

    if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
      e.preventDefault();
      printInterrupt(logEl, outputEl, inputEl.textContent ?? '');
      inputEl.textContent = '';
      logEl.scrollTop = logEl.scrollHeight;
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      runCommand(logEl, outputEl, inputEl.textContent ?? '', ctx);
      inputEl.textContent = '';
      logEl.scrollTop = logEl.scrollHeight;
    }
  });

  inputEl.addEventListener('blur', () => {
    if (!overlay.hidden) focusInput(inputEl);
  });
}
