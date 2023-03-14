import { ref, computed } from "vue";

export const useClientPaginate = (array, currentPage) => {
  const PerPageSize = ref(10);

  const paginatedArray = () => {
    array.slice((currentPage - 1) * PerPageSize.value, currentPage * PerPageSize.value);
  };

  const numberOfPages = computed(() => Math.ceil((array.length || 0) / PerPageSize.value));

  return { paginatedArray, numberOfPages };
};
