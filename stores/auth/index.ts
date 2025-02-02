import { defineStore } from "pinia";
import type { LoginForm } from "~/interfaces/login-form";

export const useAuthStore = defineStore("auth-store", () => {
    const config = useRuntimeConfig()
    const apiUrl = config.public.apibaseURL

    const user = ref<any>();

    const login = async (payload: LoginForm) => {
        const res: any = await apiFetch('/auth/login',{
            baseUrl: apiUrl,
            method: 'POST',
            body: payload
        })
        if (res) {
            user.value = res
        }

        return res;
    }

    return {
        user,
        login
    }
})