import React from "react";
import { Grid, Card, CardContent, Typography, styled } from "@mui/material";
import { People, Book, Assignment } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 275,
  textAlign: "center",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    cursor: "pointer",
  },
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
}));

const DashboardCard = ({
  icon: Icon,
  title,
  description,
  path,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  path: string;
}) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard onClick={() => navigate(path)}>
        <CardContent>
          <Icon sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h5" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

const AdminDashboard = () => {
  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      <DashboardCard
        icon={People}
        title="Students"
        description="Manage student records and information"
        path="/students"
      />
      <DashboardCard
        icon={Book}
        title="Courses"
        description="View and Add course details"
        path="/courses"
      />
      <DashboardCard
        icon={Assignment}
        title="Student Courses"
        description="Manage student course enrollments"
        path="/student-courses"
      />
    </Grid>
  );
};

export default AdminDashboard;
