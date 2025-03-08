import { create } from "zustand";

interface AdState {
    unitId: string;
    count: number;
    setUnitId: (unitId: string) => void;
    setCount: (count: number) => void;
}

export const useAdStore = create<AdState>((set) => ({
    unitId: "PUBLIC_TEST_UNIT_ID_NATIVE",
    count: 12,
    setUnitId: (unitId) => set({ unitId }),
    setCount: (count) => set({ count }),
}));
