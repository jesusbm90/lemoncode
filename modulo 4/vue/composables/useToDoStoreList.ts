import type { ToDoTask } from "~/types";

export const useToDoStoreList = defineStore("toDoListStore", () => {
  const list = ref<ToDoTask[]>([]);

  const addTask = (task: ToDoTask) => {
    list.value.push(task);
  };

  const removeTask = (index: number) => {
    list.value.splice(index, 1);
  };

  return { list, addTask, removeTask };
});
