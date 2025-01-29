import axiosInstance from './BaseService.ts';
import { LoginRequest } from '../models/LoginRequest';
import { AdminLoginRequest } from '../models/AdminLoginRequest.ts';

export const loginStudent = async (loginRequest: LoginRequest) => {
    try {
        const response = await axiosInstance.post('students/login', loginRequest);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginAdmin = async (loginRequest: AdminLoginRequest) => {
    try {
        const response = await axiosInstance.post('admins/login', loginRequest);
        return response.data;
    } catch (error) {
        throw error;
    }
};