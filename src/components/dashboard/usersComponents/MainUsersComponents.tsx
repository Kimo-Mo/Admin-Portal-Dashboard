import { Button, Pagination } from 'antd';
import UsersTable from './UsersTable';
import { AddSquare, TickSquare, Setting5, Sort, Forbidden2 } from 'iconsax-reactjs';
import { ExportButton, IBreadCrumb, SearchInput } from '../shared';
import { useConfirmPopup, useSuccessPopup } from '@/services/contexts';
import { useState } from 'react';
import UserDrawer from './UserDrawer';
import type { User } from '@/types/users.types';
import { useUsers } from '@/services/hooks/users.query';

const MainUsersComponents = () => {
  const [openUserDrawer, setOpenUserDrawer] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [selectedRows, setSelectedRows] = useState(false);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useUsers(page, 10);

  const { setOpenConfirm, setContent, setSuccess, setModalType } = useConfirmPopup();
  const { setSuccessContent } = useSuccessPopup();

  if (isLoading) return <div>... loading</div>;

  const onExportClick = () => {
    if (selectedRows) {
      setContent({
        icon: <TickSquare variant="Bulk" size={36} className="text-success/60" />,
        text: 'Are You Sure You Want To Export the selected users?',
      });
      setModalType('success');
      setSuccess(true);
      setOpenConfirm(true);
      setSuccessContent('Users Exported Successfully');
    } else {
      setContent({
        icon: <Forbidden2 size={36} color="var(--c-danger)" />,
        text: 'No Users Were Selected',
      });
      setModalType('error');
      setSuccess(false);
      setOpenConfirm(true);
    }
  };

  const onAddUserClick = () => {
    setOpenUserDrawer(true);
    setEditUser(null); // Add mode
  };

  return (
    <section>
      <IBreadCrumb title="Users" />
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4 lg:gap-0 ">
        <h1 className="text-xl font-medium">Users</h1>
        <div className="flex items-center gap-3 flex-wrap">
          <ExportButton title="Users" onClick={onExportClick} />
          <Button
            type="primary"
            size="large"
            icon={<AddSquare variant="Bulk" />}
            onClick={onAddUserClick}>
            Add New Users
          </Button>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <h2 className="text-lg font-extrabold">Users</h2>
              <span className="text-text/50">(120)</span>
            </div>
            <div className="flex justify-center items-center gap-2 p-2 cursor-pointer">
              <Sort className="text-primary" />
              <span className="text-base">Newest First</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
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
        </div>
        <UsersTable
          setSelectedRows={setSelectedRows}
          setOpenUserDrawer={setOpenUserDrawer}
          setEditUser={setEditUser}
          data={data}
        />
      </div>

      <div className="w-full my-4 flex items-center flex-col">
        <Pagination
          current={page}
          pageSize={10}
          total={100}
          onChange={(page) => {
            setPage(page);
          }}
          showSizeChanger={false}
        />
      </div>

      <UserDrawer
        open={openUserDrawer}
        onClose={() => {
          setOpenUserDrawer(false);
          setEditUser(null); // reset when closing
        }}
        editUser={editUser}
      />
    </section>
  );
};

export default MainUsersComponents;
