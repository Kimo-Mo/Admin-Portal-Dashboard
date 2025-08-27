import React, { useState } from 'react';
import { Table, Dropdown, Space, type MenuProps, Switch } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Edit, Eye, More, Trash } from 'iconsax-reactjs';
import { useSkeletonLoader } from '@/services/libs/useSkeletonLoader';

interface UserRecord {
  key: string;
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Owner' | 'Member' | 'Viewer';
  status: boolean;
  lastLogin: string;
  creationDate: string;
}

const data: UserRecord[] = [
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

const UsersTable = ({
  setSelectedRows,
}: {
  setSelectedRows: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const { renderOrSkeleton } = useSkeletonLoader(2000, true);
  const actionItems: MenuProps['items'] = [
    {
      key: '1',
      icon: <Eye size={24} />,
      label: <span className="mr-20">Impersonate</span>,
    },
    {
      key: '2',
      icon: <Trash size={24} />,
      label: 'Refresh',
    },
  ];

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
      render: (status: boolean) =>
        renderOrSkeleton(() => (
          <div
            className={`users-table-switch ${
              status ? 'active' : 'inactive'
            } flex gap-2 my-2.5 ps-4`}>
            <Switch checked={status} /> <span>{status ? 'Active' : 'Inactive'}</span>
          </div>
        )),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      sorter: true,
      key: 'actions',
      width: 100,
      render: () =>
        renderOrSkeleton(
          () => (
            <Space className="pt-2 pe-5">
              <Edit
                size={20}
                className="border-none bg-transparent opacity-60 hover:opacity-80 cursor-pointer"
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

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
      if (newSelectedRowKeys.length > 0) {
        setSelectedRows(true);
        console.log(newSelectedRowKeys);
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
      />
    </div>
  );
};

export default UsersTable;
