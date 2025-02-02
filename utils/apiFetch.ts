export const apiFetch = async (url: string, options: object = {}) => {
    const auth: any = useCookie<string | null>('access_token'); // Ensuring it's string | null
    const accessToken = auth.value ?? null;

    const defaultOptions = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    const mergedOptions = { ...defaultOptions, ...options };
    return await $fetch(url, mergedOptions);
}