import { ref } from "vue";
import { defineStore } from "pinia";
import type { todoItem } from "./todoStore.types";
import { v4 as uuidv4 } from "uuid";

export const useTodoStore = defineStore("todoStore", () => {
  const todoList = ref<todoItem[]>([]);

  const nextTodoItemMessage = ref("");

  const addTodoItem = () => {
    if (!nextTodoItemMessage.value) return;

    const nextTodoItem: todoItem = {
      message: nextTodoItemMessage.value,
      timeStamp: new Date().toString(),
      id: uuidv4(),
      isDone: false,
    };
    todoList.value.push(nextTodoItem);
    localStorage.setItem("TODO_LOCAL_STORAGE", JSON.stringify(todoList.value));
    nextTodoItemMessage.value = "";
  };

  const removeTodoItem = (todoItemId: String) => {
    const todoItemToRemoveIndex = todoList.value.findIndex(
      (element) => element.id === todoItemId
    );
    todoList.value.splice(todoItemToRemoveIndex, 1);
    localStorage.setItem("TODO_LOCAL_STORAGE", JSON.stringify(todoList.value));
  };

  const updateTodoItemState = (todoItemId: String) => {
    const todoItemToUpdateIndex = todoList.value.findIndex(
      (element) => element.id == todoItemId
    );
    todoList.value[todoItemToUpdateIndex].isDone =
      !todoList.value[todoItemToUpdateIndex].isDone;
    localStorage.setItem("TODO_LOCAL_STORAGE", JSON.stringify(todoList.value));
  };

  const getTodoLocalStorage = () => {
    const todoLocalStorage = localStorage.getItem("TODO_LOCAL_STORAGE");
    return todoLocalStorage;
  };

  const setTodoLocalStorage = () => {
    const todoLocalStorageExits = getTodoLocalStorage();
    if (todoLocalStorageExits) {
      todoList.value = JSON.parse(todoLocalStorageExits);
    } else {
      localStorage.setItem("TODO_LOCAL_STORAGE", "[]");
    }
  };
  return {
    setTodoLocalStorage,
    addTodoItem,
    removeTodoItem,
    updateTodoItemState,
    nextTodoItemMessage,
    todoList,
  };
});
