import { Button } from 'antd';
import UsersTable from './UsersTable';
import { AddSquare, ArrowDown2, TickSquare, Setting5, Sort } from 'iconsax-reactjs';
import { ExportButton, IBreadCrumb, SearchInput } from '../shared';
import { useConfirmPopup } from '@/services/contexts';
import { useSuccessPopup } from '@/services/contexts';

const MainUsersComponents = () => {
  const { setOpenConfirm, setContent } = useConfirmPopup();
  const { setSuccessContent } = useSuccessPopup();
  const onExportClick = () => {
    setContent({
      icon: <TickSquare variant="Bulk" size={36} color="var(--c-success)" />,
      text: 'Are You Sure You Want To Export the selected users?',
    });
    setOpenConfirm(true);
    setSuccessContent('users exported successfully');
  };
  
  return (
    <section>
      <IBreadCrumb title="Users" />
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-medium">Users</h1>
        <div className="flex items-center gap-3">
          <ExportButton title="Users" onClick={onExportClick} />
          <Button type="primary" size="large" icon={<AddSquare variant="Bulk" />}>
            Add New Users
          </Button>
        </div>
      </div>
      <div className="bg-card rounded-xl border border-border">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <h2 className="text-lg font-extrabold">Users</h2>
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
              <ArrowDown2 className="ms-7.5" />
            </Button>
          </div>
        </div>
        <UsersTable />
      </div>
    </section>
  );
};

export default MainUsersComponents;
