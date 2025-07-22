import { defineStore } from "pinia";

export const useMemoryStore = defineStore("memories-store", () => {
    const config = useRuntimeConfig()
    const apiUrl = config.public.apiURL

    const memory = ref();
    const memories = ref();
    const memoriesPage = ref<number>(1);
    const memoriesPerPage = ref<number>(15);
    const memoriesSearch = ref<string>("");

    const createMemory = async (data: any) => {
        const res: any = await apiFetch(
            `/memories`,
            {
                baseURL: apiUrl,
                method: "POST",
                body: data,
            }
        );

        return res;
    };

    const getMemories = async () => {
        const res: any = await apiFetch(
            `/memories?${paginateQuery(
                memoriesPage.value,
                memoriesPerPage.value,
                memoriesSearch.value
            )}`,
            {
                baseURL: apiUrl,
                method: "GET",
            }
        );

        if (res) {
            memories.value = res.data;
        }

        return res;
    };

    const getMemory = async (id: number) => {
        const res: any = await apiFetch(
            `/memories/memory/${id}`,
            {
                baseURL: apiUrl,
                method: "GET",
            }
        );

        return res;
    };

    const updateMemory = async (id: number, data: any) => {
        const res: any = await apiFetch(
            `/memories/${id}`,
            {
                baseURL: apiUrl,
                method: "PATCH",
                body: data,
            }
        );

        return res;
    };
    const deleteMemory = async (id: number) => {
        const res: any = await apiFetch(
            `/memories/${id}`,
            {
                baseURL: apiUrl,
                method: "DELETE",
            }
        );

        return res;
    };

    return {
        memory,
        memories,
        memoriesPage,
        memoriesPerPage,
        memoriesSearch,
        getMemories,
        getMemory,
        createMemory,
        updateMemory,
        deleteMemory,
    }
})