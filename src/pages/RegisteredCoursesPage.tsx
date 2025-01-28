import React from "react";

const RegisteredCoursesPage = () => {
  const registeredCourses = ["Math", "History"];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Registered Courses</h2>
      <ul>
        {registeredCourses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default RegisteredCoursesPage;
