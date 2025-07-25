import { jwtDecode } from 'jwt-decode';

export const authDecode = () => {
    const auth: any = useCookie('access_token');
    const accessToken = auth.value !== undefined
        ? (auth.value !== null ? auth.value : null)
        : null;
    if (accessToken) {
        const decode = jwtDecode(accessToken);
        return decode
    }
    return null;
}