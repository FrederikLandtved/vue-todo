<script setup>
import { ref } from 'vue'
import TodoListItem from './components/TodoListItem.vue'

defineProps({
  msg: String,
})

const todoListItemArray = [
  {
    id: 1,
    description:"Vande blomster",
    isCompleted:false
  },
  {
    id: 2,
    description:"Købe æg",
    isCompleted:true
  },
  {
    id: 2,
    description:"Spise frokost",
    isCompleted:false
  }
]

const todoListItems = ref(todoListItemArray);
const searchText = ref("");
const addNewText = ref("");

const addTodoItem = () => {
  todoListItems.value.push({ id: 4, description: addNewText, isCompleted: false });
}

</script>

<template>
<div class="container">
  <h2>To do list</h2>
  <input type="text" v-model="searchText" placeholder="Søg..">
  <input type="text" v-model="addNewText" placeholder="Tilføj ny">
  <button @click="addTodoItem()">Tilføj til liste</button>

    <ul>
        <TodoListItem 
          v-for="item in todoListItems"
          :key="item.id"
          v-bind="item">
        </TodoListItem>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
}

ul {
  margin: 0;
  padding: 0;
}

.completed {
  background-color: seagreen;
}
</style>
