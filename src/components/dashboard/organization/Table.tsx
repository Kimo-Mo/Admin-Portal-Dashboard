import React, { useState } from 'react';
import { Table, Button, Dropdown, Space, type MenuProps } from 'antd';
import { MoreOutlined, ExportOutlined, SyncOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { Edit } from 'iconsax-reactjs';
import StatusTag from './Tags/StatusTag';
import ProductTag from './Tags/ProductTag';

interface DataRecord {
  key: string;
  organization: string;
  owner: string;
  products: string[];
  status: 'Rejected' | 'In Negotiation' | 'Under Review' | 'Accepted' | 'Prospective';
  creationDate: string;
}

const data: DataRecord[] = [
  {
    key: '1',
    organization: 'CBRE',
    owner: 'Morgan Bianchi',
    products: ['DWM', 'CTI', 'DRP'],
    status: 'Rejected',
    creationDate: 'Jan 24, 2020',
  },
  {
    key: '2',
    organization: 'CBRE',
    owner: 'Jamie Nilsson',
    products: ['DWM', 'CTI', 'DRP'],
    status: 'In Negotiation',
    creationDate: 'Jan 19, 2020',
  },
  {
    key: '3',
    organization: 'Google',
    owner: 'Sasha Schmidt',
    products: ['DWM', 'CTI', 'DRP'],
    status: 'Under Review',
    creationDate: 'Jan 19, 2020',
  },
  {
    key: '4',
    organization: 'CW',
    owner: 'Alexei Varga',
    products: ['DWM', 'CTI', 'DRP'],
    status: 'Accepted',
    creationDate: 'Jan 19, 2020',
  },
  {
    key: '5',
    organization: 'OWP',
    owner: 'Adrian Martinez',
    products: ['DWM', 'CTI', 'DRP'],
    status: 'Accepted',
    creationDate: 'Jan 20, 2020',
  },
  {
    key: '6',
    organization: 'CW',
    owner: 'Alex Novak',
    products: ['DWM', 'CTI', 'DRP'],
    status: 'Prospective',
    creationDate: 'Jan 24, 2020',
  },
  {
    key: '7',
    organization: 'Google',
    owner: 'Casey Wagner',
    products: ['DWM', 'CTI', 'DRP'],
    status: 'In Negotiation',
    creationDate: 'Jan 20, 2020',
  },
  {
    key: '8',
    organization: 'CW',
    owner: 'Casey Wagner',
    products: ['DWM', 'CTI', 'DRP'],
    status: 'Rejected',
    creationDate: 'Jan 20, 2020',
  },
  {
    key: '9',
    organization: 'OWP',
    owner: 'Alex Reyes',
    products: ['DWM', 'CTI', 'DRP'],
    status: 'Accepted',
    creationDate: 'Jan 19, 2020',
  },
  {
    key: '10',
    organization: 'CBRE',
    owner: 'Jordan Kovacs',
    products: ['DWM', 'CTI', 'DRP'],
    status: 'Prospective',
    creationDate: 'Feb 1, 2020',
  },
];

const ProductsTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const actionItems: MenuProps['items'] = [
    {
      key: '1',
      icon: <ExportOutlined />,
      label: 'Export',
    },
    {
      key: '2',
      icon: <SyncOutlined />,
      label: 'Refresh',
    },
  ];

  const columns: ColumnsType<DataRecord> = [
    {
      title: 'Organization',
      dataIndex: 'organization',
      key: 'organization',
      sorter: true,
      render: (text: string) => (
        <span className="font-medium text-sm" style={{ color: 'var(--c-text)' }}>
          {text}
        </span>
      ),
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
      sorter: true,
      render: (text: string) => (
        <span className="text-sm opacity-60" style={{ color: 'var(--c-text)' }}>
          {text}
        </span>
      ),
    },
    {
      title: 'Products',
      dataIndex: 'products',
      key: 'products',
      sorter: true,
      render: (products: string[]) => (
        <Space size={4}>
          {products.map((product, index) => (
            <ProductTag key={index} product={product} />
          ))}
        </Space>
      ),
    },
    {
      title: 'Statuses',
      dataIndex: 'status',
      key: 'status',
      width: 180,
      sorter: true,
      render: (status: string) => <StatusTag status={status as DataRecord['status']} />,
    },
    {
      title: 'Creation Date',
      dataIndex: 'creationDate',
      key: 'creationDate',
      sorter: true,
      render: (text: string) => (
        <span className="text-sm opacity-60" style={{ color: 'var(--c-text)' }}>
          {text}
        </span>
      ),
    },
    {
      title: '',
      key: 'actions',
      width: 100,
      render: () => (
        <Space>
          <Button
            type="text"
            icon={<Edit />}
            className="border-none bg-transparent opacity-60 hover:opacity-80"
            style={{ color: 'var(--c-text)' }}
            size="small"
          />
          <Dropdown menu={{ items: actionItems }} trigger={['click']}>
            <Button
              type="text"
              icon={<MoreOutlined />}
              className="border-none bg-transparent opacity-60 hover:opacity-80"
              style={{ color: 'var(--c-text)' }}
              size="small"
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
    <div className="" style={{ backgroundColor: 'var(--c-background)' }}>
      <div className="rounded-b-lg overflow-hidden">
        <Table
          columns={columns}
          dataSource={data}
          rowSelection={rowSelection}
          className="rounded-none"
          rowClassName={(_, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}
        />
      </div>
    </div>
  );
};

export default ProductsTable;
