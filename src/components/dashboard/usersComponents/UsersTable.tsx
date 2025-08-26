import React, { useState } from 'react';
import { Table, Dropdown, Space, type MenuProps, Switch } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Edit, Eye, More, Refresh, Trash } from 'iconsax-reactjs';

interface UserRecord {
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
    id: '54.231.232.197',
    name: 'Ahmed',
    email: 'AhmedAhmed@gmail.com',
    role: 'Admin',
    status: true,
    lastLogin: 'Aug 25, 2025',
    creationDate: 'Jan 15, 2024',
  },
  {
    id: '192.168.1.45',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    role: 'Viewer',
    status: true,
    lastLogin: 'Aug 24, 2025',
    creationDate: 'Mar 10, 2024',
  },
  {
    id: '10.0.0.123',
    name: 'Marcus Chen',
    email: 'marcus.chen@company.com',
    role: 'Member',
    status: false,
    lastLogin: 'Aug 20, 2025',
    creationDate: 'Feb 28, 2024',
  },
  {
    id: '172.16.254.1',
    name: 'Elena Rodriguez',
    email: 'elena.rodriguez@company.com',
    role: 'Admin',
    status: true,
    lastLogin: 'Aug 26, 2025',
    creationDate: 'Jan 5, 2024',
  },
  {
    id: '203.0.113.42',
    name: 'David Kim',
    email: 'david.kim@company.com',
    role: 'Viewer',
    status: false,
    lastLogin: 'Never',
    creationDate: 'Aug 23, 2025',
  },
  {
    id: '198.51.100.88',
    name: 'Lisa Thompson',
    email: 'lisa.thompson@company.com',
    role: 'Member',
    status: false,
    lastLogin: 'Aug 15, 2025',
    creationDate: 'Dec 12, 2023',
  },
  {
    id: '192.0.2.146',
    name: 'Michael Brown',
    email: 'michael.brown@company.com',
    role: 'Owner',
    status: true,
    lastLogin: 'Aug 25, 2025',
    creationDate: 'May 18, 2024',
  },
  {
    id: '10.1.1.200',
    name: 'Anna Kowalski',
    email: 'anna.kowalski@company.com',
    role: 'Admin',
    status: false,
    lastLogin: 'Aug 18, 2025',
    creationDate: 'Apr 7, 2024',
  },
  {
    id: '172.31.0.55',
    name: 'James Wilson',
    email: 'james.wilson@company.com',
    role: 'Member',
    status: true,
    lastLogin: 'Aug 26, 2025',
    creationDate: 'Jun 22, 2024',
  },
  {
    id: '192.168.100.77',
    name: 'Priya Patel',
    email: 'priya.patel@company.com',
    role: 'Admin',
    status: true,
    lastLogin: 'Aug 24, 2025',
    creationDate: 'Jul 14, 2024',
  },
];

const UsersTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
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
      key: 'id',
      sorter: true,
      render: (text: string) => (
        <span className="text-sm opacity-60" style={{ color: 'var(--c-text)' }}>
          {text}
        </span>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 250,
      sorter: true,
      render: (text: string) => (
        <span className="text-sm opacity-60 flex items-center justify-baseline text-text">
          {text}
        </span>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 250,
      sorter: true,
      render: (email: string) => (
        <div className="flex justify-start text-text opacity-60">{email}</div>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: 180,
      sorter: true,
      render: (role: string) => (
        <div className="flex justify-start ps-10 text-text opacity-60">{role}</div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 140,
      sorter: true,
      render: (status: boolean) => (
        <div className={`users-table-switch ${status ? 'active' : 'inactive'} flex gap-2 my-2.5`}>
          <Switch checked={status} /> <span>{status ? 'Active' : 'Inactive'}</span>
        </div>
      ),
    },
    {
      title: <Refresh className="text-primary rotate-20" size={32} />,

      key: 'actions',
      width: 130,
      render: () => (
        <Space className="pt-2">
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
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };

  return (
    <div className="rounded-b-lg overflow-auto w-full">
      <Table
        columns={columns}
        dataSource={data}
        rowSelection={rowSelection}
        pagination={false}
        className="rounded-none w-full"
        rowClassName={(_, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}
      />
    </div>
  );
};

export default UsersTable;
