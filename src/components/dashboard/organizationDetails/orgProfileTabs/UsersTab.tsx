import { Button } from 'antd';
import { Setting5 } from 'iconsax-reactjs';
import { SearchInput } from '@/components/dashboard/shared';
import UsersTable from '@/components/dashboard/usersComponents/UsersTable';
import type { User } from '@/types/users.types';
import { useUsersByOrganization } from '@/services/hooks/users.query';
import type { SorterResult } from 'antd/es/table/interface';
import { useMemo, useState } from 'react';

interface UsersTableProps {
  setSelectedRows: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenUserDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setEditUser: React.Dispatch<React.SetStateAction<User | null>>;
  orgId: string;
}

const UsersTab = ({ setSelectedRows, setOpenUserDrawer, setEditUser, orgId }: UsersTableProps) => {
  const [sortConfig, setSortConfig] = useState<SorterResult<User> | null>(null);

  const {
    data: allUsers = [],
    isLoading,
  } = useUsersByOrganization(orgId);

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

  if (isLoading) return <div>... loading</div>;

  return (
    <>
      <div className="flex items-center gap-3 p-4">
        <SearchInput />
        <Button
          size="large"
          style={{
            backgroundColor: 'var(--c-secondary)',
            fontSize: '16px',
            padding: '0.75rem',
            borderRadius: '8px',
          }}
          classNames={{
            icon: 'size-6',
          }}
          icon={<Setting5 size={24} />}
        />
      </div>
      <UsersTable
        setSelectedRows={setSelectedRows}
        setOpenUserDrawer={setOpenUserDrawer}
        setEditUser={setEditUser}
        data={sortedUsers}
        handleSort={handleSort}
        sortConfig={sortConfig}
      />
    </>
  );
};

export default UsersTab;
