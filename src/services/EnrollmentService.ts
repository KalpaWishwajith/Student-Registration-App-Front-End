import axiosInstance from './BaseService.ts';
import { Enrollment } from '../models/Enrollment.ts';

export const getEnrollments = async () => {
    try {
        const response = await axiosInstance.get('/enrollments/all');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addEnrollment = async (enrollment: Enrollment) => {
    try {
        const response = await axiosInstance.post('/enrollments/addEnroll', enrollment);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const removeEnrollment = async (enrollmentId: number) => {
    try {
        const response = await axiosInstance.delete(`/enrollments/delete/${enrollmentId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};