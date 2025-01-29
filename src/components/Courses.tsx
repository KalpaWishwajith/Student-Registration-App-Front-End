import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Course } from "../models/Course.ts";
import { addCourse, getCourses } from "../services/CourseService.ts";

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [newCourseName, setNewCourseName] = useState<string>("");
  const [newCourseDescription, setNewCourseDescription] = useState<string>("");

  const fetchCourses = async () => {
    const response = await getCourses();
    setCourses(response.data);
  };

  useEffect(() => {
    fetchCourses();
  });

  const handleAddCourse = async () => {
    if (newCourseName.trim() && newCourseDescription.trim()) {
      const newCourse: Course = {
        courseID: courses.length + 1,
        courseName: newCourseName,
        courseDescription: newCourseDescription,
        isDeleted: false,
        createdDate: new Date(),
      };
      const response = await addCourse(newCourse);
      if (response) {
        alert("Course added successfully");
      } else {
        alert("Failed to add course");
      }
      setCourses([...courses, newCourse]);
      setNewCourseName("");
      setNewCourseDescription("");
    }
  };

  return (
    <Container>
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        sx={{ marginTop: 4 }}
      >
        Courses
      </Typography>

      {/* Form to add a new course */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          Add New Course
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Course Name"
              value={newCourseName}
              onChange={(e) => setNewCourseName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Course Description"
              value={newCourseDescription}
              onChange={(e) => setNewCourseDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleAddCourse}
            >
              Add Course
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Display courses as cards */}
      <Grid container spacing={4}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.courseID}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {course.courseName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.courseDescription}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Courses;
