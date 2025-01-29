import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Student Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Card for Enroll Courses */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Enroll in New Courses
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Explore and enroll in new courses to expand your knowledge.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/course-enroll")}
              >
                Enroll Courses
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card for View Enrolled Courses */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                View Enrolled Courses
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Check out the courses you are currently enrolled in.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/registered-courses")}
              >
                View Enrolled Courses
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentDashboard;
