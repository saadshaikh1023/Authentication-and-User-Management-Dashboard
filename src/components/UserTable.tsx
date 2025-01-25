"use client"

import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { DataGrid, type GridColDef, type GridValueGetter } from "@mui/x-data-grid"
import { Button, Box } from "@mui/material"
import { differenceInYears } from "date-fns"
import toast from "react-hot-toast"
import { fetchUsers, deleteUser } from "@/services/userService"
import AddEditUserModal from "./AddEditUserModal"
import type { User } from "@/types/user"

export default function UserTable() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const queryClient = useQueryClient()

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  })

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
      toast.success("User deleted successfully")
    },
    onError: () => {
      toast.error("Failed to delete user")
    },
  })

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      width: 90,
      valueGetter: (params: any) => {
      console.log('Params:', params); 
      return params?.row?.dateOfBirth 
      ? differenceInYears(new Date(), new Date(params.row.dateOfBirth)) 
      : 'N/A';
    },
 },
    { field: "dateOfBirth", headerName: "Date of Birth", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <Box>
          <Button
            onClick={() => {
              setSelectedUser(params.row)
              setIsModalOpen(true)
            }}
          >
            Edit
          </Button>
          <Button onClick={() => deleteMutation.mutate(params.row.id)} color="error">
            Delete
          </Button>
        </Box>
      ),
    },
  ]

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Button
        onClick={() => {
          setSelectedUser(null)
          setIsModalOpen(true)
        }}
        variant="contained"
        sx={{ mb: 2 }}
      >
        Add New User
      </Button>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
        loading={isLoading}
      />
      <AddEditUserModal open={isModalOpen} onClose={() => setIsModalOpen(false)} user={selectedUser} />
    </Box>
  )
}

