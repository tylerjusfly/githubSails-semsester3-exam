import { ref, computed } from "vue";

export const useClientPaginate = (array, currentPage) => {
  const pageSize = ref(9);

  const totalPages = computed(() => Math.ceil(array.value.length / pageSize.value));

  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return array.value.slice(start, end);
  });

  return { paginatedData, totalPages };
};
