import type { User } from "@/types/user"

let users: User[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  dateOfBirth: new Date(1980 + i, 0, 1).toISOString().split("T")[0],
}))

export const fetchUsers = async (): Promise<User[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay
  return users
}

export const addUser = async (user: Omit<User, "id">): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay
  const newUser = { ...user, id: users.length + 1 }
  users.push(newUser)
  return newUser
}

export const updateUser = async (user: User): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay
  const index = users.findIndex((u) => u.id === user.id)
  if (index !== -1) {
    users[index] = user
    return user
  }
  throw new Error("User not found")
}

export const deleteUser = async (id: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay
  users = users.filter((user) => user.id !== id)
}

