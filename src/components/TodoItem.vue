<script setup lang="ts">
import { useTodoStore } from "@/stores/todoStore";
import { computed } from "vue";
const todoStore = useTodoStore();

const parsedTimeStamp = computed(() => {
  return new Date(props.timeStamp).toISOString().split("T")[0];
});

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div :class="['todo-item', { 'todo-item--is-done': isDone }]">
    <div class="todo-item__info">
      <span>{{ parsedTimeStamp }}</span>
      <span>{{ message }}</span>
    </div>
    <div class="todo-item__delete" @click="todoStore.removeTodoItem(id)">
      Delete
    </div>
    <div class="todo-item__finished" @click="todoStore.updateTodoItemState(id)">
      {{ isDone ? "Revert" : "Done" }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.todo-item {
  background: #cad2c5;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem;
  padding: 0.5rem;
  &__info {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    :first-child {
      color: gray;
      font-size: 0.8rem;
    }
  }
  &__title {
    margin-right: auto;
  }
  &__delete {
    color: red;
    cursor: pointer;
  }
  &__finished {
    color: green;
    cursor: pointer;
  }
  &--is-done {
    opacity: 0.3;
  }
}
</style>
