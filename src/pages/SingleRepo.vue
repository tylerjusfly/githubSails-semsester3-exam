<script setup>
import cancel from "../assets/cancel.svg";
import branching from "../assets/github-branch.svg";
import forks from "../assets/fork.svg";
import language from "../assets/language.svg";
import link from "../assets/link.svg";

import moment from "moment";

defineProps({
  repository: Object,
  toggle: Function,
});
</script>

<template>
  <transition name="fade">
    <div class="w-full max-w-2xl p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
      <div>
        <div class="text-center p-3 flex-auto justify-center leading-6 text-black">
          <button @click="toggle({})">
            <img :src="cancel" />
          </button>

          <h3 class="text-2xl font-bold py-4">{{ repository.name }}</h3>

          <span
            class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 mt-4 rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500"
          >
            <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {{ moment(repository.created_at).format("MMMM d, YYYY") }}
          </span>
        </div>
        <!-- Repo Details -->
        <div class="text-black">
          <span class="flex flex-row items-center">
            <img :src="branching" width="40" />
            <p class="blue">{{ repository.default_branch }}</p>
          </span>
          <span class="flex flex-row items-center">
            <img :src="forks" width="40" />
            <p class="blue">{{ repository.forks }}</p>
          </span>
          <span class="flex flex-row items-center">
            <img :src="language" width="40" />
            <p class="blue">{{ repository.language ?? "Language not specified" }}</p>
          </span>
          <span class="flex flex-row items-center">
            <img :src="link" width="40" />
            <a class="blue" :href="repository.clone_url" target="blank">{{ repository.clone_url }}</a>
          </span>
        </div>
      </div>
    </div>
  </transition>

  <!-- 
    {{ repository.owner.avatar_url }}
   
  </h2>

   -->
</template>

<style lang="scss" scoped></style>
