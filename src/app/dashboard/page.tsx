"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Box, Button, Container, Typography } from "@mui/material"
import { checkAuth, logout } from "@/services/authService"
import UserTable from "@/components/UserTable"

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    if (!checkAuth()) {
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Button onClick={handleLogout} variant="contained" sx={{ mb: 2 }}>
          Logout
        </Button>
        <UserTable />
      </Box>
    </Container>
  )
}

