import { create } from "zustand";

interface PageItem {
  ID: number;
  setID: (value: number) => void;
  DefaultCount: () => void;
}
export const usePageItemStore = create<PageItem>((set) => ({
  ID: -1,
  setID: (value) => {
    set((_state) => ({ ID: value }));
  },
  DefaultCount: () => {
    set((_state) => ({ ID: -1 }));
  },
}));
