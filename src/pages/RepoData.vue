<script setup>
import Spinner from "../components/Spinner.vue";
import AllRepos from "../components/AllRepos.vue";
import SingleRepo from "./SingleRepo.vue";
import { ref, onMounted, computed, onBeforeUpdate, onBeforeMount } from "vue";
import { UseFetchGithubApi } from "../composables/UseFetchGithubApi";

const name = ref("tylerjusfly");
const { fetchData } = UseFetchGithubApi();

const loading = ref(true);
let repos = ref([]);
const lengthOfRepo = ref();

const isSingleRepo = ref(false);
const repository = ref({});

const switchRepoView = (item) => {
  isSingleRepo.value = !isSingleRepo.value;
  console.log("called");
  repository.value = item;
};

const callGithubApi = async () => {
  try {
    // Set api response in variable
    const result = await fetchData(name.value);
    console.log(result);
    repos.value = result;
    loading.value = false;
    lengthOfRepo.value = result.length;
    console.log(result.length);
  } catch (error) {
    console.log(error.message);
  }
};

// LIFE CYCLE HOOKS STAYS HERE
onBeforeMount(() => {});

onMounted(() => {
  if (loading.value) {
    callGithubApi();
  }
});

onBeforeUpdate(() => {
  repos.value = repos.value.slice().sort((a, b) => b.created_at.localeCompare(a.created_at));
});
</script>

<template>
  <section class="text-white body-font container px-2 py-10 mx-auto">
    <h1 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 text-center py-5">Repos for github {{ name }}</h1>
    <Spinner v-if="loading" />
    <AllRepos v-else-if="!loading && !isSingleRepo" :repos="repos" :toggle="switchRepoView" />
    <SingleRepo v-else-if="isSingleRepo" :toggle="switchRepoView" :repository="repository" />
  </section>
</template>
