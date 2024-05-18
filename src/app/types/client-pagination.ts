export type ClientPagination = {
    perPage: number,
    page: number,
    pageSizeOptions: Array<number>,
    defaultPageSize: number,
    totalResults: number,
}