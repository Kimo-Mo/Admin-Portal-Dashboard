import { useQuery } from '@tanstack/react-query';
import type { User } from '@/types/users.types';

// Mock data for users - in a real app this would come from an API
const mockUsersByOrganization: Record<string, User[]> = {
  'org1': [
    {
      key: '1',
      id: '001',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      status: true,
      lastLogin: '2024-01-15',
      creationDate: '2023-12-01'
    },
    {
      key: '2',
      id: '002',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Member',
      status: true,
      lastLogin: '2024-01-14',
      creationDate: '2023-12-02'
    }
  ],
  'org2': [
    {
      key: '3',
      id: '003',
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      role: 'Owner',
      status: true,
      lastLogin: '2024-01-13',
      creationDate: '2023-11-15'
    }
  ]
};

export const useUsersByOrganization = (orgId: string) => {
  return useQuery({
    queryKey: ['users', 'organization', orgId],
    queryFn: async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockUsersByOrganization[orgId] || [];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
