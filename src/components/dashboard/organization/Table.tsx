import React, { useState } from 'react';
import { Table, Button, Dropdown, Space, type MenuProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Edit, Eye, More, Refresh, Trash } from 'iconsax-reactjs';
import StatusTag from './Tags/StatusTag';
import ProductTag from './Tags/ProductTag';
import { useSkeletonLoader } from '@/services/libs/useSkeletonLoader';
import type { DataRecord } from '@/types';
import { orgData } from '@/services/mockData';
import { Link } from 'react-router-dom';
import { useConfirmPopup, useSuccessPopup } from '@/services/contexts';

const ProductsTable = ({
  setSelectedRows,
}: {
  setSelectedRows: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const { renderOrSkeleton } = useSkeletonLoader();
  const { setOpenConfirm, setContent, setSuccess, setModalType } = useConfirmPopup();
  const { setSuccessContent } = useSuccessPopup();
  const handleDeleteOrg = () => {
    setContent({
      icon: <Trash size={36} color="var(--c-danger)" />,
      text: 'Are You Sure You Want To Delete This Organization?',
    });
    setSuccessContent('Organization Deleted Successfully');
    setSuccess(true);
    setOpenConfirm(true);
    setModalType('error');
  };
  const actionItems: MenuProps['items'] = [
    {
      key: '1',
      icon: <Eye size={24} />,
      label: <span className="mr-20">Impersonate</span>,
    },
    {
      key: '2',
      icon: <Trash size={24} />,
      label: 'Delete',
      onClick: handleDeleteOrg,
    },
  ];

  const columns: ColumnsType<DataRecord> = [
    {
      title: 'Organization',
      dataIndex: 'organization',
      key: 'organization',
      sorter: true,
      render: (text: string, record: DataRecord) =>
        renderOrSkeleton(() => (
          <Link
            to={`/dashboard/organizations/${record.key}`}
            className="text-sm opacity-60"
            style={{ color: 'var(--c-text)' }}>
            {text}
          </Link>
        )),
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
      width: 150,
      sorter: true,
      render: (text: string) =>
        renderOrSkeleton(() => (
          <span
            className="text-sm opacity-60 flex items-center justify-baseline"
            style={{ color: 'var(--c-text)' }}>
            {text}
          </span>
        )),
    },
    {
      title: 'Products',
      dataIndex: 'products',
      key: 'products',
      sorter: true,
      render: (products: string[]) =>
        renderOrSkeleton(() => (
          <Space size={4}>
            {products.map((product, index) => (
              <ProductTag key={index} product={product} />
            ))}
          </Space>
        )),
    },
    {
      title: 'Statuses',
      dataIndex: 'status',
      key: 'status',
      width: 180,
      sorter: true,
      render: (status: string) =>
        renderOrSkeleton(() => <StatusTag status={status as DataRecord['status']} />),
    },
    {
      title: 'Creation Date',
      dataIndex: 'creationDate',
      key: 'creationDate',
      sorter: true,
      render: (text: string) =>
        renderOrSkeleton(() => (
          <span className="text-sm opacity-60" style={{ color: 'var(--c-text)' }}>
            {text}
          </span>
        )),
    },
    {
      title: <Refresh className="text-primary rotate-20" size={32} />,

      key: 'actions',
      width: 100,
      fixed: 'right',
      render: () =>
        renderOrSkeleton(
          () => (
            <Space className="2xl:ps-2">
              <Button
                type="text"
                icon={<Edit size={20} />}
                className="border-none bg-transparent opacity-60 hover:opacity-80"
                style={{ color: 'var(--c-text)' }}
                size="small"
              />
              <Dropdown menu={{ items: actionItems }} trigger={['click']}>
                <Button
                  type="text"
                  icon={<More size={20} className="rotate-90" />}
                  className="border-none bg-transparent opacity-60 hover:opacity-80 p-0 m-0"
                  style={{ color: 'var(--c-text)' }}
                  size="small"
                />
              </Dropdown>
            </Space>
          ),
          100
        ),
    },
  ];

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
        dataSource={orgData}
        rowSelection={rowSelection}
        pagination={false}
        className="rounded-none w-full"
        rowClassName={(_, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}
        scroll={{ x: 'max-content' }}
        size="small"
      />
    </div>
  );
};

export default ProductsTable;
