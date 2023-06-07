import {create} from "zustand";

// eslint-disable-next-line no-unused-vars
export const counterStore = create((set) => ({
    count: 10,
    increment : () => set((state) => ({ count: state.count + 1 })),
    decrement: ()  => set((state) => ({ count: state.count - 1})),
}))