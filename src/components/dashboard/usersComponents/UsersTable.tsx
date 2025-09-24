import { useConfirmPopup, useSuccessPopup } from '@/services/contexts';
import { useDeleteUser, useUpdateUser } from '@/services/hooks/users.query';
import { useSkeletonLoader } from '@/services/libs/useSkeletonLoader';
import type { User } from '@/types/users.types';
import { Dropdown, Space, Switch, Table, type MenuProps, type TablePaginationConfig } from 'antd';
import type { ColumnsType, SorterResult } from 'antd/es/table/interface';
import { CloseSquare, Edit, More, TickSquare, Trash } from 'iconsax-reactjs';
import React, { useState } from 'react';

interface UsersTableProps {
  setSelectedRows: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenUserDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setEditUser: React.Dispatch<React.SetStateAction<User | null>>;
  data: User[] | undefined;
  handleSort: (sorter: SorterResult<User>) => void;
  sortConfig: SorterResult<User> | null;
}

const UsersTable = ({ setSelectedRows, setOpenUserDrawer, setEditUser, data, handleSort, sortConfig }: UsersTableProps) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const deleteUser = useDeleteUser();

  const { setOpenConfirm, setContent, setSuccess, setModalType, setOnOk } = useConfirmPopup();
  const { setSuccessContent } = useSuccessPopup();
  const { renderOrSkeleton } = useSkeletonLoader(20, true);
  const updateUser = useUpdateUser();

  const handleDeleteUser = async (record: User) => {
    try {
      setContent({
        icon: <Trash size={36} color="var(--c-danger)" />,
        text: 'Are You Sure You Want To Delete This User?',
      });
      setOnOk(() => async () => await deleteUser.mutateAsync(record.id));
      setSuccessContent('User Deleted Successfully');
      setSuccess(true);
      setOpenConfirm(true);
      setModalType('error');
    } catch (err) {
      console.error('Failed to delete user:', err);
    }
  };

  const getActionItems = (record: User): MenuProps['items'] => {
    return [
      {
        key: '1',
        icon: <Trash size={24} />,
        label: 'Delete',
        onClick: () => handleDeleteUser(record),
      },
    ];
  };

  const handleStatusChange = (isActivating: boolean, record: User) => {
    setTimeout(() => {
      if (!isActivating) {
        setContent({
          icon: <CloseSquare variant="Bulk" size={36} color="var(--c-danger)" />,
          text: 'Are you sure you want to suspend this user?',
        });
        setSuccessContent('User suspended successfully');
        setSuccess(true);
        setModalType('error');
      } else {
        setContent({
          icon: <TickSquare variant="Bulk" size={36} color="var(--c-success)" />,
          text: 'Are you sure you want to activate this user?',
        });
        setSuccessContent('User activated successfully');
        setSuccess(true);
        setModalType('success');
      }

      setOnOk(() => () => handleOkConfirm(record, isActivating));
      setOpenConfirm(true);
    }, 0);
  };

  const handleOkConfirm = async (record: User, isActivating: boolean) => {
    try {
      const newStatus = isActivating ? 'Active' : 'Inactive';
      await updateUser.mutateAsync({ id: record.id, payload: { status: newStatus } });
    } catch (err) {
      console.error('Failed to update user:', err);
    }
  };

  const columns: ColumnsType<User> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 250,
      sorter: true,
      sortOrder: sortConfig?.field === 'id' ? sortConfig.order : null,
      render: (text: string) =>
        renderOrSkeleton(() => <span className="text-sm opacity-60 ps-4 text-text">{text}</span>),
    },
    {
      title: 'Name',
      dataIndex: 'first_name',
      key: 'first_name',
      width: 250,
      sorter: true,
      sortOrder: sortConfig?.field === 'first_name' ? sortConfig.order : null,
      render: (_: string, record: User) =>
        renderOrSkeleton(() => (
          <span className="text-sm opacity-60 flex items-center justify-baseline text-text ps-4">
            {record.first_name} {record.last_name}
          </span>
        )),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 250,
      sorter: true,
      sortOrder: sortConfig?.field === 'email' ? sortConfig.order : null,
      render: (email: string) =>
        renderOrSkeleton(
          () => <div className="flex justify-start text-text opacity-60 ps-4">{email}</div>,
          150
        ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: 200,
      sorter: true,
      sortOrder: sortConfig?.field === 'role' ? sortConfig.order : null,
      render: (role: string) =>
        renderOrSkeleton(() => {
          role = role.slice(0, 1).toUpperCase() + role.slice(1);
          return <div className="flex justify-start text-text opacity-60 ps-4">{role}</div>;
        }),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 180,
      sorter: true,
      sortOrder: sortConfig?.field === 'status' ? sortConfig.order : null,
      render: (status: string, record: User) =>
        renderOrSkeleton(() => (
          <div
            className={`users-table-switch ${
              status === 'Active' ? 'active' : 'inactive'
            } flex gap-2 my-2.5 ps-4`}>
            <Switch
              checked={status === 'Active'}
              onChange={(checked: boolean) => handleStatusChange(checked, record)}
            />{' '}
            <span>{status}</span>
          </div>
        )),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      sorter: false,
      fixed: 'right',
      key: 'actions',
      width: 100,
      render: (_, record) =>
        renderOrSkeleton(
          () => (
            <Space className="pt-2 pe-0 2xl:pe-3">
              <Edit
                size={20}
                className="border-none bg-transparent opacity-60 hover:opacity-80 cursor-pointer"
                onClick={() => handleEditUser(record)}
              />
              <Dropdown menu={{ items: getActionItems(record) }} trigger={['click']}>
                <More
                  size={20}
                  className="rotate-90 border-none bg-transparent opacity-60 hover:opacity-80 p-0 m-0 cursor-pointer"
                />
              </Dropdown>
            </Space>
          ),
          90
        ),
    },
  ];

  const handleEditUser = (record: User) => {
    setEditUser(record);
    setOpenUserDrawer(true);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
      if (newSelectedRowKeys.length > 0) {
        setSelectedRows(true);
      } else {
        setSelectedRows(false);
      }
    },
  };

  const handleTableChange = (
    _: TablePaginationConfig,
    __: Record<string, (React.Key | boolean)[] | null>,
    sorter: SorterResult<User> | SorterResult<User>[]
  ) => {
    if (Array.isArray(sorter)) {
      return;
    }
    handleSort(sorter);
  };

  return (
    <div className="rounded-b-lg overflow-auto w-full">
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(record) => record.id}
        rowSelection={rowSelection}
        pagination={false}
        className="rounded-none w-full users-table"
        rowClassName={(_, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}
        scroll={{ x: 'max-content' }}
        size="small"
        onChange={handleTableChange}
      />
    </div>
  );
};

export default UsersTable;
