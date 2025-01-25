// This is a mock authentication service
let isAuthenticated = false

export const login = async (email: string, password: string): Promise<boolean> => {
  // In a real application, you would validate the credentials against a backend
  if (email === "saadshaikh139@gmail.com" && password === "password") {
    isAuthenticated = true
    return true
  }
  return false
}

export const logout = (): void => {
  isAuthenticated = false
}

export const checkAuth = (): boolean => {
  return isAuthenticated
}

