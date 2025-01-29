import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  AppBar,
  Toolbar,
  TextField,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { Course } from "../models/course.ts";
import { getCourses } from "../services/CourseService.ts";
import { useAuth } from "../providers/AuthContext.tsx";
import {
  getEnrolledCoursesByStudent,
  getStudentById,
} from "../services/StudentService.ts";
import { addEnrollment } from "../services/EnrollmentService.ts";
import { Student } from "../models/Student.ts";

const CourseEnrollment = () => {
  const { user } = useAuth();
  const [enrolled, setEnrolled] = useState<number[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [student, setStudent] = useState<Student>();

  const fetchCourses = async () => {
    const response = await getCourses();
    setCourses(response);
  };

  const fetchStudent = async () => {
    const response = await getStudentById(user?.id);
    setStudent(response);
  };

  const fetchEnrolledCourses = async () => {
    const result = await getEnrolledCoursesByStudent(user?.id);
    setEnrolled(result.map((course: Course) => course.courseID));
  };

  useEffect(() => {
    fetchCourses();
    fetchEnrolledCourses();
    fetchStudent();
  });

  const handleEnroll = async (courseId) => {
    if (!enrolled.includes(courseId) && student) {
      const course = courses.find((course) => course.courseID === courseId);
      if (course) {
        const enrollment = {
          enrollmentID: 0, // or generate a unique ID
          enrolledDate: new Date(),
          isEnrolled: true,
          studentID: student.studentID,
          courseID: courseId,
          student: student, // assuming user object contains student details
          course: course, // assuming courses array contains course details
        };
        const response = await addEnrollment(enrollment);
        if (response === true) {
          alert("Successfully enrolled in the course!");
        } else {
          alert("Failed to enroll in the course!");
        }
        setEnrolled([...enrolled, courseId]);
        setOpenSnackbar(true);
      }
      setEnrolled([...enrolled, courseId]);
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Course Catalog
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search courses..."
            InputProps={{
              startAdornment: <Search sx={{ color: "action.active", mr: 1 }} />,
            }}
            sx={{ width: 300 }}
          />
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {courses.map((course) => (
            <Grid item key={course.courseID} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {course.courseName}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {course.courseDescription}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEnroll(course.courseID)}
                    disabled={enrolled.includes(course.courseID)}
                  >
                    {enrolled.includes(course.courseID)
                      ? "Enrolled"
                      : "Enroll Now"}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Successfully enrolled in the course!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CourseEnrollment;
