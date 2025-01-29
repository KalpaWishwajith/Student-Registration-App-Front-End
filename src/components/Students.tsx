import React, { useEffect, useState } from "react";
import { Container, Paper, Typography } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridLoadingOverlay,
} from "@mui/x-data-grid";
import { useTheme } from "@mui/material/styles";
import { format } from "date-fns";
import { Student } from "../models/Student.ts";
import { getStudents } from "../services/StudentService.ts";

const Students = () => {
  const theme = useTheme();
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    const response = await getStudents();
    console.log(response);
    setStudents(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
      minWidth: 250,
      renderCell: (params) => (
        <a
          href={`mailto:${params.value}`}
          style={{ color: theme.palette.primary.main }}
        >
          {params.value}
        </a>
      ),
    },
    {
      field: "createdDate",
      headerName: "Registration Date",
      flex: 1,
      minWidth: 200,
      valueGetter: (params: { value: any }) => new Date(params.value),
      valueFormatter: (params: { value: any }) => {
        const date = new Date(params.value);
        return isNaN(date.getTime()) ? "Invalid Date" : format(date, "PPpp");
      },
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ mb: 3, color: theme.palette.text.primary }}
      >
        Students Management
      </Typography>

      <Paper
        elevation={3}
        sx={{
          height: 600,
          width: "100%",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <DataGrid
          rows={students}
          columns={columns}
          loading={loading}
          slots={{
            toolbar: GridToolbar,
            loadingOverlay: GridLoadingOverlay,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          disableRowSelectionOnClick
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            },
            "& .MuiDataGrid-toolbarContainer": {
              padding: 2,
              backgroundColor: theme.palette.background.paper,
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          }}
          getRowId={(row) => row.studentID}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even-row" : "odd-row"
          }
        />
      </Paper>
    </Container>
  );
};

export default Students;
