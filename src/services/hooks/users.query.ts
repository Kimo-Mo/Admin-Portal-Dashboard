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
import { useMemo, useState } from 'react';

// --- Keys ---
const USERS_KEY = ['users'];
const USER_KEY = (id: string) => ['users', id];
const ORG_USERS_KEY = (orgId: string) => ['organizations', orgId, 'users'];

import type { SorterResult } from 'antd/es/table/interface';

// --- Queries ---

export const useUsers = (page: number = 1, pageSize: number = 10) => {
  const [sortConfig, setSortConfig] = useState<SorterResult<User> | null>(null);

  const {
    data: allUsers = [],
    isLoading,
    error,
  } = useQuery<User[]>({
    queryKey: USERS_KEY,
    queryFn: listUsers,
  });

  const sortedUsers = useMemo(() => {
    if (!sortConfig || !sortConfig.order || !sortConfig.field) {
      return allUsers;
    }
    const { field, order } = sortConfig;
    return [...allUsers].sort((a, b) => {
      const aValue = a[field as keyof User];
      const bValue = b[field as keyof User];

      if (aValue === bValue) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;

      if (aValue < bValue) {
        return order === 'ascend' ? -1 : 1;
      }
      if (aValue > bValue) {
        return order === 'ascend' ? 1 : -1;
      }
      return 0;
    });
  }, [allUsers, sortConfig]);

  const handleSort = (sorter: SorterResult<User>) => {
    setSortConfig(sorter);
  };

  return {
    isLoading,
    error,
    sortConfig,
    handleSort,
    paginatedData: sortedUsers.slice((page - 1) * pageSize, page * pageSize),
    totalItems: sortedUsers.length,
  };
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
