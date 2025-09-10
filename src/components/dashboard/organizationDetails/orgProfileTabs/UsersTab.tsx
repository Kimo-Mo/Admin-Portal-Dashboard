import { Button } from 'antd';
import { Setting5 } from 'iconsax-reactjs';
import { SearchInput } from '@/components/dashboard/shared';
import UsersTable from '@/components/dashboard/usersComponents/UsersTable';
import type { UserRecord } from '@/types';

interface UsersTableProps {
  setSelectedRows: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenUserDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setEditUser: React.Dispatch<React.SetStateAction<UserRecord | null>>;
}

const UsersTab = ({ setSelectedRows, setOpenUserDrawer, setEditUser }: UsersTableProps) => {
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
      />
    </>
  );
};

export default UsersTab;
