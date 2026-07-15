export type SortDirection = "asc" | "desc";

export interface SortOption {
  label: string;
  sortBy?: string;
  sortDirection?: SortDirection;
}

export interface BooksQueryParams {
  page?: number;
  limit?: number;
  searchText?: string;
  sortBy?: string;
  sortDirection?: SortDirection;
}

export interface Pagination {
  total_records: number;
  total_pages: number;
  current_page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  pagination: Pagination;
  data: T[];
}
