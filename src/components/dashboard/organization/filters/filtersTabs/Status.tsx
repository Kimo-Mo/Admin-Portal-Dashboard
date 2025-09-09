import FilterLabel from '@/components/dashboard/organization/filters/filtersTabs/ui/label';

function Status() {
  return (
    <div className="my-2 space-y-1">
      <FilterLabel title={'Blocked'} />
      <FilterLabel title={'Approved'} />
      <FilterLabel title={'Pending'} />
    </div>
  );
}

export default Status;
