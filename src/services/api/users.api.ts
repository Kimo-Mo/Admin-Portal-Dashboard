// src/api/users.api.ts
import axiosInstance from './axiosInstance';

// -------- Types --------
export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: string;
  role?: string;
  is_owner?: boolean;
  organization?: string;
  national_id: string;
}

export interface CreateUserDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  phone: string;
  role?: string;
  is_owner?: boolean;
  organization?: string;
  national_id: string;
}

export interface UpdateUserDto {
  first_name?: string;
  last_name?: string;
  email?: string;
  status?: string;
  phone?: string;
  role?: string;
  is_owner?: boolean;
  national_id?: string;
  password?: string;
  confirm_password?: string;
}

// -------- Requests --------

// Create User
export const createUser = async (payload: CreateUserDto): Promise<User> => {
  const { data } = await axiosInstance.post<User>('/users', payload);
  return data;
};

// List Users
export const listUsers = async (): Promise<User[]> => {
  const { data } = await axiosInstance.get<User[]>('/users');
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
