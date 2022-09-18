<script setup lang="ts">
import { useTodoStore } from "@/stores/todoStore";
const todoStore = useTodoStore();
</script>

<template>
  <div class="todo-header">
    <input
      type="text"
      class="todo-header__input"
      v-model="todoStore.nextTodoItemMessage"
      @keyup.enter="todoStore.addTodoItem()"
    />
    <div class="todo-header__add" @click="todoStore.addTodoItem()">Add</div>
  </div>
</template>

<style scoped lang="scss">
.todo-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  background-color: #d7d7d7;
  border: 1px solid #2f3e46;
  padding: 0.5rem;
  &__input {
    width: 100%;
  }
  &__add {
    background-color: #2f3e46;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
  }
}
</style>
