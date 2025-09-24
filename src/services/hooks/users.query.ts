// src/api/users.hooks.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateUserDto, UpdateUserDto, User } from '@/types/users.types';
import {
  createUser,
  listUsers,
  getUser,
  updateUser,
  deleteUser,
  getUsersByOrganization,
} from '@/services/api/users.api';

// --- Keys ---
const USERS_KEY = ['users'];
const USER_KEY = (id: string) => ['users', id];
const ORG_USERS_KEY = (orgId: string) => ['organizations', orgId, 'users'];

// --- Queries ---

// List all users
export const useUsers = (page: number = 1, pageSize: number = 10) => {
  return useQuery<User[]>({
    queryKey: [...USERS_KEY, page, pageSize],
    queryFn: () => listUsers(page, pageSize),
  });
};

// Get single user
export const useUser = (id: string) => {
  return useQuery<User>({
    queryKey: USER_KEY(id),
    queryFn: () => getUser(id),
    enabled: !!id, // only run if id is provided
  });
};

// Get users by organization
export const useUsersByOrganization = (orgId: string) => {
  return useQuery<User[]>({
    queryKey: ORG_USERS_KEY(orgId),
    queryFn: () => getUsersByOrganization(orgId),
    enabled: !!orgId,
  });
};

// --- Mutations ---

// Create
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateUserDto) => createUser(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: USERS_KEY });
    },
  });
};

// Update
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateUserDto }) =>
      updateUser(id, payload),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: USERS_KEY });
      queryClient.invalidateQueries({ queryKey: USER_KEY(id) });
    },
  });
};

// Delete
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: USERS_KEY });
    },
  });
};
