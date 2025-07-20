export const paginateQuery = (page: number, perPage: number, search?: string): String => {
    const query = search ? `page=${page}&per_page=${perPage}&search=${search}` : `page=${page}&per_page=${perPage}`;
    return query;
}