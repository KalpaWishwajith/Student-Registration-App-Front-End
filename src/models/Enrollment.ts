import { Student } from './Student.ts';
import { Course } from './Course.ts';

export interface Enrollment {
    enrollmentID: number;
    courseID: number;
    studentID: number;
    enrolledDate: Date;
    isEnrolled: boolean;
    unEnrolledDate?: Date;
    student: Student;
    course: Course;
}