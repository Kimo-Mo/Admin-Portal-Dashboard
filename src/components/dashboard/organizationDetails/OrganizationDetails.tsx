import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { DataRecord } from '@/types';
import { orgData } from '@/services/mockData';
import { ExportButton, IBreadCrumb } from '../shared';

import { Button, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import OrgInfoTab from './OrgInfoTab';
import UsersTab from './UsersTab';
import { AddSquare, Forbidden2, TickSquare } from 'iconsax-reactjs';
import { useConfirmPopup, useSuccessPopup } from '@/services/contexts';
import type { UserRecord } from '../usersComponents/UsersTable';
import UserDrawer from '../usersComponents/UserDrawer';
import ProductsTab from './ProductsTab';

const OrganizationDetails = () => {
  const { key } = useParams();
  const [OrgInfo, setOrgInfo] = useState<DataRecord | null>(null);
  const { setOpenConfirm, setContent, setSuccess, setModalType } = useConfirmPopup();
  const { setSuccessContent } = useSuccessPopup();
  const [selectedRows, setSelectedRows] = useState(false);
  const [openUserDrawer, setOpenUserDrawer] = useState(false);
  const [editUser, setEditUser] = useState<UserRecord | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>('generalInfo');

  const onChange = (key: string) => {
    setSelectedTab(key);
  };

  const items: TabsProps['items'] = useMemo(
    () => [
      {
        key: 'generalInfo',
        label: 'general info',
        children: <OrgInfoTab OrgInfo={OrgInfo} />,
      },
      {
        key: 'users',
        label: 'users',
        children: (
          <UsersTab
            setSelectedRows={setSelectedRows}
            setOpenUserDrawer={setOpenUserDrawer}
            setEditUser={setEditUser}
          />
        ),
      },
      {
        key: 'products',
        label: 'products',
        children: <ProductsTab OrgInfo={OrgInfo} />,
      },
    ],
    [OrgInfo]
  );

  useEffect(() => {
    const org = orgData.find((org) => org.key === key);
    setOrgInfo(org || null);
  }, [key]);
  
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
    setEditUser(null);
  };
  return (
    <section>
      <IBreadCrumb title={OrgInfo?.organization as string} child="organizations" />
      <div className="flex items-center justify-between my-6">
        <h1 className="text-xl font-medium py-2.5">{OrgInfo?.organization}</h1>
        {selectedTab === 'users' && (
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
        )}
      </div>
      <div className="bg-card border border-border rounded-xl">
        <Tabs size="large" defaultActiveKey="generalInfo" items={items} onChange={onChange} />
      </div>
      <UserDrawer
        open={openUserDrawer}
        onClose={() => setOpenUserDrawer(false)}
        editUser={editUser}
      />
    </section>
  );
};

export default OrganizationDetails;
