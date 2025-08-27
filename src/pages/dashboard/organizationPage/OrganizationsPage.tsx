import { ExportButton, IBreadCrumb } from '@/components/dashboard';
import ProductsTable from '@/components/dashboard/organization/Table';
import { Button } from 'antd';
import { AddSquare } from 'iconsax-reactjs';

function OrganizationsPage() {
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
      <ProductsTable />
    </section>
  );
}

export default OrganizationsPage;
