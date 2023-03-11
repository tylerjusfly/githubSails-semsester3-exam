<template>
  <h1>Hello world {{ $route.params.id }}</h1>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
const route = useRouter();

// console.log(id);
onMounted(() => {});
</script>
