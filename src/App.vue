<script setup lang="ts">
import { onMounted } from "vue";
import { useTodoStore } from "@/stores/todoStore";
const todoStore = useTodoStore();

onMounted(() => {
  todoStore.setTodoLocalStorage();
});
</script>

<template>
  <div class="todo">
    <div class="todo__card">
      <TodoHeader />
      <div class="todo__body" v-if="todoStore.todoList.length">
        <TodoItem
          v-for="(todo, index) in todoStore.todoList"
          :key="index"
          :message="todo.message"
          :id="todo.id"
          :timeStamp="todo.timeStamp"
          :isDone="todo.isDone"
        />
      </div>
      <p class="todo__empty" v-else>No todos</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.todo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: auto;
  background: #cad2c5;

  &__card {
    height: 30rem;
    width: 90vw;
    max-width: 30rem;
    background: #52796f;
    display: flex;
    flex-direction: column;
  }
  &__body {
    flex: 1;
    overflow: scroll;
  }
  &__empty {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
}
</style>
