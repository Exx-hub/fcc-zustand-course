import { createWithEqualityFn } from "zustand/traditional";

const taskStore = (set) => ({
  tasks: [{ title: "Testtast", state: "PLANNED" }],
  addTask: (title, stateTitle) =>
    set((state) => ({ tasks: [...state.tasks, { title, state: stateTitle }] })),
});

const useTaskStore = createWithEqualityFn(taskStore);

export default useTaskStore;
