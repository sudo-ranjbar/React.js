import { create } from "zustand";

type CounterStore = {
  counter: number,
  increase: () => void,
  increaseAsync: () => Promise<void>,
  decrease: () => void,

}
export const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increase: () => set((state) => ({ counter: state.counter + 1 })),
  increaseAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    set((state) => ({ counter: state.counter + 1 }))
  },
  decrease: () => set((state) => ({ counter: state.counter - 1 })),
}))