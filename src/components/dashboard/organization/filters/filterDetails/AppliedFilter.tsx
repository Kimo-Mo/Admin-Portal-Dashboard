import { CloseSquare } from 'iconsax-reactjs';

function AppliedFilter({ title }: { title: string }) {
  return (
    <div className="flex px-2 py-1 gap-2 bg-elevated items-center rounded-sm">
      <h4>filter: {title}</h4>
      <CloseSquare size={16} variant="Bulk" className="cursor-pointer" />
    </div>
  );
}

export default AppliedFilter;
