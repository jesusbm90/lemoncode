<template>
  <div class="main-container">
    <div class="form-container">
      <form @submit.prevent="onSubmit">
        <input v-model="inputValue" placeholder="agregar tarea" />
        <button type="submit">Agregar</button>
      </form>
    </div>
    <div>
      <ul>
        <li
          v-for="(task, index) in storeToDoList.list"
          :key="task.id"
          class="list"
        >
          <input type="checkbox" v-model="task.done" />
          <span
            :style="{ textDecoration: task.done ? 'line-through' : 'none' }"
            >{{ task.name }}</span
          >
          <button @click="removeToDo(index)">Eliminar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{}>();
const storeToDoList = useToDoStoreList();

const onSubmit = () => {
  if (inputValue.value) {
    storeToDoList.addTask({
      name: inputValue.value,
      done: false,
      id: new Date().getTime(),
    });

    inputValue.value = "";
  } else {
    alert("Type a ToDo task");
  }
};

const removeToDo = (index: number) => {
  storeToDoList.removeTask(index);
};

const inputValue = ref("");
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.form-container {
  margin-bottom: 20px;
}

.list {
  margin-bottom: 10px;
}

.list > * {
  margin-right: 10px;
}
</style>
