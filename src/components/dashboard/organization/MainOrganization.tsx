import { Button } from 'antd';
import { ExportButton, IBreadCrumb, SearchInput } from '../shared';
import { AddSquare, ArrowDown2, Setting5 } from 'iconsax-reactjs';
import ProductsTable from './Table';
import { useState } from 'react';
import CreateOrgDrawer from './CreateOrgDrawer';

const MainOrganization = () => {
  const [createOrgDrawer, setCreateOrgDrawer] = useState(false);
  const openCreateOrgDrawer = () => {
    setCreateOrgDrawer(true);
  };
  const onClose = () => {
    setCreateOrgDrawer(false);
  };
  return (
    <section>
      <CreateOrgDrawer createOrgDrawer={createOrgDrawer} onClose={onClose} />
      <IBreadCrumb title="Organization" />
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-medium">Organizations</h1>
        <div className="flex items-center gap-3">
          <ExportButton />
          <Button
            size="large"
            style={{
              background: 'linear-gradient(90deg, #281543 , #0E2248 )',
              color: '#fff',
            }}>
            Invite Owner
          </Button>
          <Button
            type="primary"
            size="large"
            icon={<AddSquare variant="Bulk" />}
            onClick={openCreateOrgDrawer}>
            Create New Organization
          </Button>
        </div>
      </div>
      <div className="bg-card rounded-xl border border-border">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <SearchInput />
            <Button
              size="large"
              style={{
                backgroundColor: 'var(--c-secondary)',
                fontSize: '16px',
                width: '11.25rem',
                padding: '0.75rem',
                borderRadius: '8px',
                gap: '0.5rem',
                justifyContent: 'flex-start',
              }}
              icon={<Setting5 />}>
              Add Filter
              <ArrowDown2 className="ms-4.5" size={24} />
            </Button>
          </div>
        </div>
        <ProductsTable />
      </div>
    </section>
  );
};

export default MainOrganization;
