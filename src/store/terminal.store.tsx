import { create } from "zustand";

type TerminalStore = {
  commands: string[];
  commandHistory: string[];
  addCommandToHistory: (command: string) => void;
  clearCommandHistory: () => void;
};

export const useTerminalStore = create<TerminalStore>((set) => ({
  commands: [
    "help",
    "about",
    "skills",
    "projects",
    "clear",
    "start",
    "hello",
    "joke",
  ],
  commandHistory: [],
  addCommandToHistory: (command: string) => {
    set((state) => ({
      commandHistory: [...state.commandHistory, command],
    }));
  },
  clearCommandHistory: () => {
    set(() => ({
      commandHistory: [],
    }));
  },
}));
