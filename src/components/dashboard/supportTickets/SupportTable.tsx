import { useSkeletonLoader } from '@/services/libs/useSkeletonLoader';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';

import { ticketsData } from '@/services/mockData';
import type { TicketRecord } from '@/types';
import SupportDrawer from './SupportDrawer';
import TicketsTagSelector from './cardView/TicketsTagSelector';

const SupportTable = ({
  setSelectedRows,
}: {
  setSelectedRows: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const { renderOrSkeleton } = useSkeletonLoader();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [ticket, setTicket] = useState<TicketRecord | null>(null);

  const handleTicketClick = (record: TicketRecord) => {
    setTicket(record);
    setDrawerOpen(true);
  };

  const columns: ColumnsType<TicketRecord> = [
    {
      title: 'Ticket Title',
      dataIndex: 'ticketTitle',
      key: 'ticketTitle',
      sorter: true,
      render: (text: string, record: TicketRecord) =>
        renderOrSkeleton(
          () => (
            <span
              onClick={() => handleTicketClick(record)}
              className="text-sm opacity-60 cursor-pointer hover:text-primary transition-colors duration-200"
              style={{ color: 'var(--c-text)' }}>
              {text}
            </span>
          ),
          80
        ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      sorter: true,
      render: (text: string) =>
        renderOrSkeleton(
          () => (
            <span
              className="text-sm opacity-60 flex items-center justify-baseline max-w-20 text-ellipsis overflow-hidden"
              style={{ color: 'var(--c-text)' }}>
              {text}
            </span>
          ),
          80
        ),
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      sorter: true,

      render: (priority: 'High' | 'Medium' | 'Low') =>
        renderOrSkeleton(
          () => <TicketsTagSelector values={['High', 'Medium', 'Low']} defaultValue={priority} />,
          80
        ),
    },
    {
      title: 'Statuses',
      dataIndex: 'status',
      key: 'status',
      sorter: true,
      render: (status: TicketRecord['status']) =>
        renderOrSkeleton(() => (
          <TicketsTagSelector
            values={['Pending', 'In Progress', 'Ignored', 'Closed']}
            defaultValue={status}
          />
        )),
    },
    {
      title: 'Creation Date',
      dataIndex: 'creationDate',
      key: 'creationDate',
      sorter: true,
      render: (text: string) =>
        renderOrSkeleton(
          () => (
            <span className="text-sm opacity-60" style={{ color: 'var(--c-text)' }}>
              {text}
            </span>
          ),
          80
        ),
    },
    {
      title: 'Updated',
      dataIndex: 'updated',
      key: 'updated',
      sorter: true,
      render: (text: string) =>
        renderOrSkeleton(
          () => (
            <span className="text-sm opacity-60" style={{ color: 'var(--c-text)' }}>
              {text}
            </span>
          ),
          80
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
        dataSource={ticketsData}
        rowSelection={rowSelection}
        pagination={false}
        className="rounded-none w-full support-table"
        rowClassName={(_, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}
        scroll={{ x: 'max-content' }}
        size="small"
      />
      <SupportDrawer ticket={ticket} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
};

export default SupportTable;
