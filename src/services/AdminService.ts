import axiosInstance from './BaseService.ts';
import { Admin } from '../models/Admin.ts';



export const getAdminById = async (adminId: number) => {
    try {
        const response = await axiosInstance.get(`admins/GetById/${adminId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAdminByUsername = async (username: string) => {
    try {
        const response = await axiosInstance.get(`admins/GetByUsername/${username}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addAdmin = async (admin: Admin) => {
    try {
        const response = await axiosInstance.post('admins/register', admin);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateAdmin = async (adminId: number, admin: Admin) => {
    try {
        const response = await axiosInstance.put(`admins/update/${adminId}`, admin);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteAdmin = async (adminId: number) => {
    try {
        const response = await axiosInstance.delete(`admins/delete/${adminId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};