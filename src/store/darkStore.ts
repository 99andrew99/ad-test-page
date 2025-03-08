import { create } from "zustand";

interface DarkState {
    isDarkMode: boolean;
    setIsDarkMode: () => void;
}

export const useDarkStore = create<DarkState>((set) => ({
    isDarkMode: false,
    setIsDarkMode: () => set((prev) => ({ isDarkMode: !prev.isDarkMode })),
}));
