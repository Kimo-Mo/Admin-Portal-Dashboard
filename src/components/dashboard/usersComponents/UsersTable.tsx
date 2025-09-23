import { deleteUser, listUsers, updateUser } from '@/services/api/users.api';
import { useConfirmPopup, useSuccessPopup } from '@/services/contexts';
import { useSkeletonLoader } from '@/services/libs/useSkeletonLoader';
import type { User } from '@/types/users.types';
import { Dropdown, Space, Switch, Table, type MenuProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { CloseSquare, Edit, More, TickSquare, Trash } from 'iconsax-reactjs';
import React, { useEffect, useState } from 'react';

interface UsersTableProps {
  setSelectedRows: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenUserDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setEditUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UsersTable = ({ setSelectedRows, setOpenUserDrawer, setEditUser }: UsersTableProps) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await listUsers();
        setData(users); // set state with the result
      } catch (err) {
        console.error('Failed to fetch users:', err);
      }
    };

    fetchUsers();
  }, []);

  const { setOpenConfirm, setContent, setSuccess, setModalType, setOnOk } = useConfirmPopup();
  const { setSuccessContent } = useSuccessPopup();
  const { renderOrSkeleton } = useSkeletonLoader(2000, true);

  const handleDeleteUser = async (record: User) => {
    try {
      await deleteUser(record.id);

      // Remove deleted user from state
      setData((prevData) => prevData.filter((user) => user.id !== record.id));

      setContent({
        icon: <Trash size={36} color="var(--c-danger)" />,
        text: 'Are You Sure You Want To Delete This User?',
      });
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
      await updateUser(record.id, { status: newStatus });
      const newData = data.map((item) =>
        item.id === record.id ? { ...item, status: newStatus } : item
      );
      setData(newData);
    } catch (err) {
      console.error('Failed to update user:', err);
    }
  };

  const columns: ColumnsType<User> = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 250,
      key: 'id',
      sorter: true,
      render: (text: string) =>
        renderOrSkeleton(() => <span className="text-sm opacity-60 ps-4 text-text">{text}</span>),
    },
    {
      title: 'Name',
      dataIndex: 'first_name',
      key: 'name',
      width: 250,
      sorter: true,
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
      render: (status: string, record: User) =>
        renderOrSkeleton(() => (
          <div
            className={`users-table-switch ${
              status == 'Active' ? 'active' : 'inactive'
            } flex gap-2 my-2.5 ps-4`}>
            <Switch
              checked={status == 'Active'}
              onChange={(checked: boolean) => handleStatusChange(checked, record)}
            />{' '}
            <span>{status ? 'Active' : 'Inactive'}</span>
          </div>
        )),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      sorter: true,
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
      />
    </div>
  );
};

export default UsersTable;
