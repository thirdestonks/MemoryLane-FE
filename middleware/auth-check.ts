export default defineNuxtRouteMiddleware((to, from) => {
  const auth: any = authDecode()

  // Check if token exists
  if (auth) {
    // Redirect based on role
    if (auth.role === 'admin') {
      return navigateTo('/admin/dashboard')
    } else {
      return navigateTo('/user/dashboard')
    }
  }
})
