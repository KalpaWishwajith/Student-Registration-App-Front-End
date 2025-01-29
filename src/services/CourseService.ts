import axiosInstance from './BaseService.ts';
import { Course } from '../models/Course.ts';

export const getCourses = async () => {
    try {
        const response = await axiosInstance.get('courses/all');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getCourseById = async (courseId: number) => {
    try {
        const response = await axiosInstance.get(`courses/${courseId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addCourse = async (course: Course) => {
    try {
        const response = await axiosInstance.post('courses/addCourse', course);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateCourse = async (courseId: number, course: Course) => {
    try {
        const response = await axiosInstance.put(`courses/update/${courseId}`, course);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteCourse = async (courseId: number) => {
    try {
        const response = await axiosInstance.delete(`courses/delete/${courseId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};