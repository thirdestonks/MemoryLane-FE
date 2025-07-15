export default defineNuxtRouteMiddleware((to, from) => {
    const auth: any = authDecode();
    //check if has access token
    if (auth) {
        //check if role is admin
        if (auth.role !== 'admin') {
            return navigateTo('/user/dashboard')
        }
    } else {
        return navigateTo('/admin/dashboard')
    }
})