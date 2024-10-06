import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";


interface counterState {
  count: number,
  increment: () => void,
  reset: () => void
}


export const useStore = create<counterState, [["zustand/persist", counterState]]>(
  persist<counterState>(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      reset: () => set(() => ({ count: 0 })),
    }),
    { name: 'counter-storage' } as PersistOptions<counterState>
  )
);