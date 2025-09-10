import { useConfirmPopup, useSuccessPopup } from '@/services/contexts';
import { Button, Pagination } from 'antd';
import { AddSquare, DocumentText1, Forbidden2, Setting5, Sort } from 'iconsax-reactjs';
import { useState } from 'react';
import { ExportButton, IBreadCrumb, SearchInput } from '../shared';
import { CreateOrgDrawer } from './createOrgDrawer';
import Filters from './filters/Filters';
import InviteOwnerDrawer from './inviteOwnerDrawer/InviteOwnerDrawer';
import ProductsTable from './Table';

const MainOrganization = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  const [isFiltersOpenAnimate, setIsFiltersOpenAnimate] = useState(true);
  const [createOrgDrawer, setCreateOrgDrawer] = useState(false);
  const [openOwnerDrawer, setOpenOwnerDrawer] = useState(false);
  const [selectedRows, setSelectedRows] = useState(false);
  const { setOpenConfirm, setContent, setSuccess, setModalType } = useConfirmPopup();
  const { setSuccessContent } = useSuccessPopup();
  const onExportClick = () => {
    if (selectedRows) {
      setContent({
        icon: <DocumentText1 size={36} color="var(--c-success)" />,
        text: 'Are You Sure You Want To Export the selected organizations?',
      });
      setModalType('success');
      setSuccess(true);
      setOpenConfirm(true);
      setSuccessContent('Organizations Exported Successfully');
    } else {
      setContent({
        icon: <Forbidden2 size={36} color="var(--c-danger)" />,
        text: 'No Organizations Selected',
      });
      setModalType('error');
      setSuccess(false);
      setOpenConfirm(true);
    }
  };
  const openCreateOrgDrawer = () => {
    setCreateOrgDrawer(true);
  };
  const closeCreateOrgDrawer = () => {
    setCreateOrgDrawer(false);
  };

  const onOpenOwnerDrawer = () => {
    setOpenOwnerDrawer(true);
  };
  const onCloseOwnerDrawer = () => {
    setOpenOwnerDrawer(false);
  };
  return (
    <section>
      <CreateOrgDrawer createOrgDrawer={createOrgDrawer} onClose={closeCreateOrgDrawer} />
      <IBreadCrumb title="Organization" />
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4 lg:gap-0">
        <h1 className="text-xl font-medium">Organizations</h1>
        <div className="flex items-center flex-wrap gap-3">
          <ExportButton onClick={onExportClick} />
          <Button
            size="large"
            style={{
              background: 'linear-gradient(90deg, #281543 , #0E2248 )',
              color: '#fff',
            }}
            onClick={onOpenOwnerDrawer}>
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
          <div className="xl:flex hidden items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <h2 className="text-lg font-extrabold">Organizations</h2>
              <span className="text-text/50">(120)</span>
            </div>
            <div className="flex justify-center items-center gap-2 p-2 cursor-pointer">
              <Sort className="text-primary" />
              <span className="text-base">Newest First</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <SearchInput />
            <Button
              size="large"
              onClick={() => {
                if (isFiltersOpen) {
                  setTimeout(() => setIsFiltersOpen(!isFiltersOpen), 300);
                  setIsFiltersOpenAnimate(!isFiltersOpenAnimate);
                } else {
                  setIsFiltersOpen(!isFiltersOpen);
                  setTimeout(() => setIsFiltersOpenAnimate(!isFiltersOpenAnimate), 300);
                }
              }}
              style={{
                backgroundColor: 'var(--c-secondary)',
                fontSize: '16px',
                padding: '0.75rem',
                borderRadius: '8px',
              }}
              classNames={{
                icon: 'size-6',
              }}
              icon={<Setting5 size={24} />}
            />
          </div>
        </div>
        <div className="flex">
          <ProductsTable setSelectedRows={setSelectedRows} />
          {isFiltersOpen && (
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isFiltersOpenAnimate ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}>
              <div className="overflow-hidden">
                <Filters />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full mt-4 flex items-center flex-col">
        <Pagination total={120} showSizeChanger={false} />
      </div>
      <InviteOwnerDrawer open={openOwnerDrawer} onClose={onCloseOwnerDrawer} />
    </section>
  );
};

export default MainOrganization;
