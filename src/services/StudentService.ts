import axiosInstance from './BaseService.ts';
import { Student } from '../models/Student';

export const getStudents = async () => {
    try {
        const response = await axiosInstance.get('students/all');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getStudentById = async (studentId: number|undefined) => {
    try {
        const response = await axiosInstance.get(`students/${studentId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const registerStudent = async (student: Student) => {
    try {
        const response = await axiosInstance.post('students/register', student);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateStudent = async (studentId: number, student: Student) => {
    try {
        const response = await axiosInstance.put(`students/update/${studentId}`, student);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteStudent = async (studentId: number) => {
    try {
        const response = await axiosInstance.delete(`students/delete/${studentId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getEnrolledCoursesByStudent = async (studentId: number|undefined) => {
    try {
        console.log(studentId);
        const response = await axiosInstance.get(`students/enrolled-courses/${studentId}`);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

export const getAllStudentsWithCourses = async () => {
    try {
        const response = await axiosInstance.get('students/all-students-with-courses');
        return response;
    } catch (error) {
        throw error;
    }
};