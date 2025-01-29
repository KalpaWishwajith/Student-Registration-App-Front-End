import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Container,
} from "@mui/material";
import { Course } from "../models/course.ts";
import { getEnrolledCoursesByStudent } from "../services/StudentService.ts";
import { removeEnrollment } from "../services/EnrollmentService.ts";
import { Enrollment } from "../models/Enrollment.ts";

interface User {
  id: number;
  email: string;
  role: "student" | "admin";
}

const RegisteredCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const fetchCourseForStudent = async () => {
    const response = await getEnrolledCoursesByStudent(user?.id);
    setCourses(response.data);
  };

  const fetchEnrollments = async () => {
    const response = await getEnrolledCoursesByStudent(user?.id);
    setEnrollments(response.data);
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    fetchCourseForStudent();
    fetchEnrollments();
  });

  // Function to handle unenrollment
  const handleUnenroll = async (courseId: number) => {
    if (
      user?.id &&
      enrollments.some(
        (enrollment) =>
          enrollment.courseID === courseId && enrollment.studentID === user.id
      )
    ) {
      const enrollment = enrollments.find(
        (enrollment) =>
          enrollment.courseID === courseId && enrollment.studentID === user.id
      );
      if (enrollment) {
        const enrollmentId = enrollment.enrollmentID;
        const response = await removeEnrollment(enrollmentId);
        if (response) {
          alert("Course unenrolled successfully");
        } else {
          alert("Failed to unenroll from the course");
        }
        setCourses((prevCourses) =>
          prevCourses.filter((course) => course.courseID !== courseId)
        );
      }
    }
    setCourses((prevCourses) =>
      prevCourses.filter((course) => course.courseID !== courseId)
    );
  };

  return (
    <Container>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Registered Courses
        </Typography>

        {/* Display registered courses in cards */}
        <Grid container spacing={3}>
          {courses.map((course) => (
            <Grid item key={course.courseID} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {course.courseName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {course.courseDescription}
                  </Typography>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleUnenroll(course.courseID)}
                  >
                    Unenroll
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Display a message if no courses are registered */}
        {courses.length === 0 && (
          <Typography variant="h6" align="center" sx={{ marginTop: 4 }}>
            You are not enrolled in any courses.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default RegisteredCourses;
