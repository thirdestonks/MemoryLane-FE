import { defineStore } from "pinia";
import type { LoginForm } from "~/interfaces/login-form";

export const useAuthStore = defineStore("auth-store", () => {
    const router = useRouter()
    const config = useRuntimeConfig()
    const apiUrl = config.public.apiURL
    const token = useCookie('access_token')
    const auth = useCookie('access_token', {
    //expire after 7 days
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    });

    const login = async (payload: LoginForm) => {

        const res: any = await apiFetch('/auth/login', {
            baseURL: apiUrl,
            method: 'POST',
            body: payload
        })
        if (res) {
            auth.value = res
        }

        return res;
    }

    const logout = () => {
        const auth = useCookie('access_token');
        auth.value = null;
        setTimeout(() => {
            router.push('/login')
        }, 1500)
    }

    return {
        auth,
        token,
        login,
        logout,
    }
})