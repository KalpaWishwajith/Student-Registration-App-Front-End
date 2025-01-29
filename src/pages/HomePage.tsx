import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://www.skillshub.com/wp-content/uploads/2023/01/office-work-collaboration.jpg)", // Add a background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
            borderRadius: 2,
            textAlign: "center",
            maxWidth: "400px", // Limit the width for better aesthetics
            margin: "auto", // Center the paper
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >
            Welcome
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "#555", marginBottom: 4 }}
          >
            Choose an option to get started
          </Typography>

          {/* Stack buttons vertically */}
          <Stack spacing={2} alignItems="center">
            {/* Login Button */}
            <Button
              variant="contained"
              size="large"
              startIcon={<LoginIcon />}
              onClick={() => navigate("/login")}
              sx={{
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#1565c0" },
                width: "100%", // Full width
                padding: "10px 20px", // Add padding
                fontSize: "1.1rem", // Increase font size
              }}
            >
              Login
            </Button>

            {/* Register Button */}
            <Button
              variant="contained"
              size="large"
              startIcon={<PersonAddIcon />}
              onClick={() => navigate("/register")}
              sx={{
                backgroundColor: "#4caf50",
                "&:hover": { backgroundColor: "#388e3c" },
                width: "100%",
                padding: "10px 20px",
                fontSize: "1.1rem",
              }}
            >
              Register
            </Button>

            {/* Admin Login Button */}
            <Button
              variant="contained"
              size="large"
              startIcon={<AdminPanelSettingsIcon />}
              onClick={() => navigate("/admin-login")}
              sx={{
                backgroundColor: "#f44336",
                "&:hover": { backgroundColor: "#d32f2f" },
                width: "100%",
                padding: "10px 20px",
                fontSize: "1.1rem",
              }}
            >
              Login as Admin
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default HomePage;
