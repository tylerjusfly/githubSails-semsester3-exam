<template>
  <div class="pagination">
    <button @click="previousPage" :disabled="currentPage == 1">Previous</button>
    <span>{{ currentPage }}</span>
    <button @click="nextPage" :disabled="currentPage == pageSize">Next</button>
  </div>
</template>

<script setup>
defineProps({
  previousPage: Function,
  nextPage: Function,
  currentPage: Number,
  pageSize: Number,
});
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 20px;
  margin-top: 20px;

  vertical-align: middle;
  border-radius: 4px;
  padding: 1px 2px 4px 2px;
  border-top: 1px solid #aeaeae;
  border-bottom: 1px solid #ffffff;
}
.pagination button {
  margin: 0 10px;
}
</style>
