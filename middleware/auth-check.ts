export default defineNuxtRouteMiddleware((to, from) => {
  const auth: any = authDecode()

  console.log('Auth Decode:', auth) // 🐞 Log decoded token

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
