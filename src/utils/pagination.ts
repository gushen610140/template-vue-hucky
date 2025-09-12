import { ref, computed, ComputedRef, Ref } from "vue";

export interface PaginationOptions {
  pageSize?: number;
  initialPage?: number;
  maxVisiblePages?: number;
}

export interface PaginationResult<T> {
  // Pagination state
  currentPage: Ref<number>;
  pageSize: Ref<number>;
  totalPages: ComputedRef<number>;
  pageNumbers: ComputedRef<(number | string)[]>;

  // Pagination methods
  changePage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;

  // Data methods
  getPaginatedData: ComputedRef<T[]>;
  setTotalItems: (count: number) => void;
}

/**
 * Create pagination functionality for a list of items
 *
 * @param data Ref to the full data array or a function that returns the full data
 * @param options Pagination options
 * @returns Pagination state and methods
 */
export function usePagination<T>(
  data: Ref<T[]> | (() => T[]),
  options: PaginationOptions = {},
): PaginationResult<T> {
  // Initialize pagination state
  const currentPage = ref(options.initialPage || 1);
  const pageSize = ref(options.pageSize || 10);
  const maxVisiblePages = options.maxVisiblePages || 5;

  // Calculate if data is a ref or a function
  const isDataRef = "value" in data;

  // Calculate total items
  const totalItems = computed(() => {
    if (isDataRef) {
      return (data as Ref<T[]>).value.length;
    } else {
      return (data as () => T[])().length;
    }
  });

  // Calculate total pages
  const totalPages = computed(() => {
    return Math.ceil(totalItems.value / pageSize.value);
  });

  // Get paginated data
  const getPaginatedData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;

    if (isDataRef) {
      return (data as Ref<T[]>).value.slice(start, end);
    } else {
      const fullData = (data as () => T[])();
      return fullData.slice(start, end);
    }
  });

  // Generate array of page numbers for pagination
  const pageNumbers = computed(() => {
    const pages: (number | string)[] = [];

    if (totalPages.value <= maxVisiblePages) {
      // Show all pages if total pages are less than max visible
      for (let i = 1; i <= totalPages.value; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate start and end of visible page range
      let startPage = Math.max(2, currentPage.value - 1);
      let endPage = Math.min(totalPages.value - 1, currentPage.value + 1);

      // Adjust if we're near the beginning
      if (currentPage.value <= 3) {
        endPage = Math.min(totalPages.value - 1, 4);
      }

      // Adjust if we're near the end
      if (currentPage.value >= totalPages.value - 2) {
        startPage = Math.max(2, totalPages.value - 3);
      }

      // Add ellipsis if needed before visible pages
      if (startPage > 2) {
        pages.push("...");
      }

      // Add visible page numbers
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipsis if needed after visible pages
      if (endPage < totalPages.value - 1) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPages.value);
    }

    return pages;
  });

  // Change page
  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };

  // Next page
  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };

  // Previous page
  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };

  // Set total items (useful for API pagination)
  const setTotalItems = (count: number) => {
    totalItems.value = count;
  };

  return {
    currentPage,
    pageSize,
    totalPages,
    pageNumbers,
    changePage,
    nextPage,
    prevPage,
    getPaginatedData,
    setTotalItems,
  };
}
