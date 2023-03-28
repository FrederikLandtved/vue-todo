<script setup>
import { ref } from 'vue'

defineProps({
  description: String,
  isCompleted: Boolean,
  id: Number
})

</script>

<template>
    <li :class="{ completed: isCompleted }" :key="id">
      {{ description }}
      <input type="checkbox">
    </li>
</template>

<style scoped>
  li {
    list-style: none;
    margin: 0;
    padding: 10px;

  }

  .completed {
    background-color: green;
  }
</style>
