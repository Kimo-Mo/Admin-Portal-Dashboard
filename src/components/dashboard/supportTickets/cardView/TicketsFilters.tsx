import { Status } from 'iconsax-reactjs';
import CreationDate from '../../organization/filters/filtersTabs/CreationDate';
import NumberOfUsers from '../../organization/filters/filtersTabs/NumberOfUsers';
import Products from '../../organization/filters/filtersTabs/Products';
import FilterTab from '../../organization/filters/FilterTab';

function Filters() {
  return (
    //TODO:Responsiveness
    <div className="rounded-lg p-2 flex flex-col ms-4 bg-secondary/30 min-w-50 border border-border me-4">
      <FilterTab title="Status" Content={() => <Status />} />
      <FilterTab title="Products" Content={() => <Products />} />
      <FilterTab title="Creation Date" Content={() => <CreationDate />} />
      <FilterTab title="Number Of Users" Content={() => <NumberOfUsers />} />
    </div>
  );
}

export default Filters;
