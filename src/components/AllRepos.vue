<script setup>
import { ref } from "vue";
// importing svgs
import githubsvg from "../assets/github.svg";
import moment from "moment";

defineProps({
  repos: Array,
  toggle: Function,
});
</script>

<template>
  <div class="flex flex-wrap -m-4">
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
          <a class="mt-3 text-indigo-500 inline-flex items-center" @click="toggle(item)"
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
</template>

<style scoped></style>
