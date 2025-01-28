import React, { useState } from "react";

const courses = ["Math", "Science", "History", "Art"];

const EnrollPage = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const handleCheckboxChange = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    );
  };

  const handleSubmit = () => {
    console.log("Enrolled in:", selectedCourses);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Enroll in Courses</h2>
      {courses.map((course) => (
        <div key={course}>
          <label>
            <input
              type="checkbox"
              value={course}
              onChange={() => handleCheckboxChange(course)}
            />
            {course}
          </label>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 mt-4"
      >
        Enroll
      </button>
    </div>
  );
};

export default EnrollPage;
