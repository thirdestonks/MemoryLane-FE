import { defineStore } from "pinia";

export const useMemoryStore = defineStore("memories-store", () => {
    const config = useRuntimeConfig()
    const apiUrl = config.public.apibaseURL

    const memory = ref();
    const memories = ref();

    return {
        memory,
        memories,
    }
})