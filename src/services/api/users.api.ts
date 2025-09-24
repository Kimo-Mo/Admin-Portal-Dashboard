// src/api/users.api.ts
import type { CreateUserDto, UpdateUserDto, User } from '@/types/users.types';
import axiosInstance from './axiosInstance';

// -------- Requests --------

// Create User
export const createUser = async (payload: CreateUserDto): Promise<User> => {
  //bypass payload needing password
  const { data } = await axiosInstance.post<User>('/users', {
    ...payload,
    password: '12345678',
    confirm_password: '12345678',
    phone: '+201100200300',
    role: payload.role?.toLowerCase(),
    national_id: Math.floor(1e13 + Math.random() * 9e13).toString(),
  });
  return data;
};

// List Users
export const listUsers = async (page: number = 1, pageSize: number = 10): Promise<User[]> => {
  const { data } = await axiosInstance.get<User[]>('/users', {
    params: {
      page,
      size: pageSize,
    },
  });
  return data;
};

// Get User by ID
export const getUser = async (id: string): Promise<User> => {
  const { data } = await axiosInstance.get<User>(`/users/${id}`);
  return data;
};

// Update User
export const updateUser = async (id: string, payload: UpdateUserDto): Promise<User> => {
  const { data } = await axiosInstance.put<User>(`/users/${id}`, payload);
  return data;
};

// Delete User (soft delete)
export const deleteUser = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/users/${id}`);
};

// Get Users by Organization
export const getUsersByOrganization = async (organizationId: string): Promise<User[]> => {
  const { data } = await axiosInstance.get<User[]>(`/organizations/${organizationId}/users`);
  return data;
};
