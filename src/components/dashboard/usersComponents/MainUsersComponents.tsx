import { Button } from 'antd';
import UsersTable from './UsersTable';
import { AddSquare, ArrowDown2, Setting5, Sort } from 'iconsax-reactjs';
import { ExportButton, IBreadCrumb, SearchInput } from '../shared';

const MainUsersComponents = () => {
  return (
    <section>
      <IBreadCrumb title="Users" />
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-medium">Users</h1>
        <div className="flex items-center gap-3">
          <ExportButton title="Users" />
          <Button type="primary" size="large" icon={<AddSquare variant="Bulk" />}>
            Add New Users
          </Button>
        </div>
      </div>
      <div className="bg-card rounded-xl border border-border">
        <div className="pt-6 pb-8.5 px-5">
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
