import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Space, type MenuProps, Switch } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { CloseSquare, Edit, More, TickSquare, Trash } from 'iconsax-reactjs';
import { useSkeletonLoader } from '@/services/libs/useSkeletonLoader';
import { useConfirmPopup, useSuccessPopup } from '@/services/contexts';

export interface UserRecord {
  key: string;
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Owner' | 'Member' | 'Viewer';
  status: boolean;
  lastLogin: string;
  creationDate: string;
}

const usersData: UserRecord[] = [
  {
    key: '1',
    id: '54.231.232.197',
    name: 'Ahmed',
    email: 'AhmedAhmed@gmail.com',
    role: 'Admin',
    status: true,
    lastLogin: 'Aug 25, 2025',
    creationDate: 'Jan 15, 2024',
  },
  {
    key: '2',
    id: '192.168.1.45',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    role: 'Viewer',
    status: true,
    lastLogin: 'Aug 24, 2025',
    creationDate: 'Mar 10, 2024',
  },
  {
    key: '3',
    id: '10.0.0.123',
    name: 'Marcus Chen',
    email: 'marcus.chen@company.com',
    role: 'Member',
    status: false,
    lastLogin: 'Aug 20, 2025',
    creationDate: 'Feb 28, 2024',
  },
  {
    key: '4',
    id: '172.16.254.1',
    name: 'Elena Rodriguez',
    email: 'elena.rodriguez@company.com',
    role: 'Admin',
    status: true,
    lastLogin: 'Aug 26, 2025',
    creationDate: 'Jan 5, 2024',
  },
  {
    key: '5',
    id: '203.0.113.42',
    name: 'David Kim',
    email: 'david.kim@company.com',
    role: 'Viewer',
    status: false,
    lastLogin: 'Never',
    creationDate: 'Aug 23, 2025',
  },
  {
    key: '6',
    id: '198.51.100.88',
    name: 'Lisa Thompson',
    email: 'lisa.thompson@company.com',
    role: 'Member',
    status: false,
    lastLogin: 'Aug 15, 2025',
    creationDate: 'Dec 12, 2023',
  },
  {
    key: '7',
    id: '192.0.2.146',
    name: 'Michael Brown',
    email: 'michael.brown@company.com',
    role: 'Owner',
    status: true,
    lastLogin: 'Aug 25, 2025',
    creationDate: 'May 18, 2024',
  },
  {
    key: '8',
    id: '10.1.1.200',
    name: 'Anna Kowalski',
    email: 'anna.kowalski@company.com',
    role: 'Admin',
    status: false,
    lastLogin: 'Aug 18, 2025',
    creationDate: 'Apr 7, 2024',
  },
  {
    key: '9',
    id: '172.31.0.55',
    name: 'James Wilson',
    email: 'james.wilson@company.com',
    role: 'Member',
    status: true,
    lastLogin: 'Aug 26, 2025',
    creationDate: 'Jun 22, 2024',
  },
  {
    key: '10',
    id: '192.168.100.77',
    name: 'Priya Patel',
    email: 'priya.patel@company.com',
    role: 'Admin',
    status: true,
    lastLogin: 'Aug 24, 2025',
    creationDate: 'Jul 14, 2024',
  },
];

interface UsersTableProps {
  setSelectedRows: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenUserDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setEditUser: React.Dispatch<React.SetStateAction<UserRecord | null>>;
}

const UsersTable = ({ setSelectedRows, setOpenUserDrawer, setEditUser }: UsersTableProps) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [data, setData] = useState<UserRecord[]>([]);
  useEffect(() => {
    setData(usersData);
  }, []);

  const { setOpenConfirm, setContent, setSuccess, setModalType, setOnOk } = useConfirmPopup();
  const { setSuccessContent } = useSuccessPopup();
  const { renderOrSkeleton } = useSkeletonLoader(2000, true);

  const handleDeleteUser = () => {
    setContent({
      icon: <Trash size={36} color="var(--c-danger)" />,
      text: 'Are You Sure You Want To Delete This User?',
    });
    setSuccessContent('User Deleted Successfully');
    setSuccess(true);
    setOpenConfirm(true);
    setModalType('error');
  };

  const actionItems: MenuProps['items'] = [
    {
      key: '1',
      icon: <Trash size={24} />,
      label: 'Delete',
      onClick: handleDeleteUser,
    },
  ];

  const handleStatusChange = (isActivating: boolean, record: UserRecord) => {
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
      setOnOk(() => () => handleOkConfirm(record));
      setOpenConfirm(true);
    }, 0);
  };

  const handleOkConfirm = async (record: UserRecord) => {
    const newData = data.map((item) => {
      if (item.key === record.key) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setData(newData);
  };

  const columns: ColumnsType<UserRecord> = [
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
      dataIndex: 'name',
      key: 'name',
      width: 250,
      sorter: true,
      render: (text: string) =>
        renderOrSkeleton(() => (
          <span className="text-sm opacity-60 flex items-center justify-baseline text-text ps-4">
            {text}
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
        renderOrSkeleton(() => (
          <div className="flex justify-start text-text opacity-60 ps-4">{role}</div>
        )),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 180,
      sorter: true,
      render: (status: boolean, record: UserRecord) =>
        renderOrSkeleton(() => (
          <div
            className={`users-table-switch ${
              status ? 'active' : 'inactive'
            } flex gap-2 my-2.5 ps-4`}>
            <Switch checked={status} onChange={(status) => handleStatusChange(status, record)} />{' '}
            <span>{status ? 'Active' : 'Inactive'}</span>
          </div>
        )),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      sorter: true,
      fixed:"right",
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
              <Dropdown menu={{ items: actionItems }} trigger={['click']}>
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
  const handleEditUser = (record: UserRecord) => {
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
