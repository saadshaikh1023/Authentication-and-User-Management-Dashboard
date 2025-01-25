"use client"

import { useState, useEffect } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Modal, Box, TextField, Button } from "@mui/material"
import toast from "react-hot-toast"
import { addUser, updateUser } from "@/services/userService"
import type { User } from "@/types/user"

interface AddEditUserModalProps {
  open: boolean
  onClose: () => void
  user: User | null
}

export default function AddEditUserModal({ open, onClose, user }: AddEditUserModalProps) {
  const [name, setName] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const queryClient = useQueryClient()

  useEffect(() => {
    if (user) {
      setName(user.name)
      setDateOfBirth(user.dateOfBirth)
    } else {
      setName("")
      setDateOfBirth("")
    }
  }, [user])

  const addMutation = useMutation({
    mutationFn: (newUser: Omit<User, "id">) => addUser(newUser),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
      toast.success("User added successfully")
      onClose()
    },
    onError: () => {
      toast.error("Failed to add user")
    },
  })

  const updateMutation = useMutation({
    mutationFn: (updatedUser: User) => updateUser(updatedUser),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
      toast.success("User updated successfully")
      onClose()
    },
    onError: () => {
      toast.error("Failed to update user")
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (user) {
      updateMutation.mutate({ id: user.id, name, dateOfBirth })
    } else {
      addMutation.mutate({ name, dateOfBirth })
    }
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} margin="normal" />
          <TextField
            fullWidth
            label="Date of Birth"
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            {user ? "Update" : "Add"} User
          </Button>
        </form>
      </Box>
    </Modal>
  )
}

