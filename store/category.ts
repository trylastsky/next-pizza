import { create } from 'zustand';

interface State {
    activeCategoryId: number;
    setActiveCategoryId: (id: number) => void;
}

export const useCategoryStore = create<State>((set) => ({
    activeCategoryId: 0,
    setActiveCategoryId: (id: number) => set({ activeCategoryId: id })
}));