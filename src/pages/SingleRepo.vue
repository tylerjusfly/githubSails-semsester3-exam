<script setup>
import Spinner from "../components/Spinner.vue";
import { ref, onMounted, computed, onBeforeUpdate, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { UseFetchGithubApi } from "../composables/UseFetchGithubApi";
import moment from "moment";

// importing svgs
import githubsvg from "../assets/github.svg";

const name = ref("tylerjusfly");
const router = useRouter();
const { fetchData, USERNAME } = UseFetchGithubApi();

const loading = ref(true);
const repos = ref([]);
const lengthOfRepo = ref();
const PageSize = ref(10);

const callGithubApi = async () => {
  try {
    // Set api response in variable
    const result = await fetchData(name.value);
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

const pushh = (data) => {
  router.push({ name: "repoData", params: { id: 2 } });
};

onBeforeUpdate(() => {
  const totalPages = computed(() => Math.ceil(lengthOfRepo.value / PageSize.value));
  console.log("before updated");

  console.log("total pages:==>", totalPages.value);
});
</script>

<template>
  <section class="text-white body-font container px-2 py-10 mx-auto">
    <h1 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 text-center py-5">Repos for github {{ USERNAME }}</h1>
    <Spinner v-if="loading" />
    <div v-else class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3" v-for="item in repos" :key="item.id">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
              <img :src="githubsvg" />
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">
              {{ item.name }}
            </h2>
          </div>
          <div class="flex-grow">
            <ul class="leading-relaxed text-base text-gray-900">
              <li>Language : {{ item.language ?? "No Languages" }}</li>
              <li>Clone Url : {{ item.clone_url.substring(0, 60) }}...</li>
              <li>Created At : {{ moment(item.created_at).format("DD-MM-YYYY") }}</li>

              <!-- <li v-for="topic in item.topics" :key="topic">{{ topic }}</li> -->
            </ul>
            <a class="mt-3 text-indigo-500 inline-flex items-center" @click="pushh(item)"
              >View More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <!-- ends -->
    </div>
  </section>
</template>
