import CreationDate from './filtersTabs/CreationDate';
import NumberOfUsers from './filtersTabs/NumberOfUsers';
import Products from './filtersTabs/Products';
import Status from './filtersTabs/Status';
import FilterTab from './FilterTab';

function Filters() {
  return (
    //TODO:Responsiveness
    <div className="rounded-lg p-2 flex flex-col ms-4 bg-secondary/30 min-w-50 border border-border me-4 my-2">
      <FilterTab title="Filters" Content={() => <div></div>} />
      <FilterTab title="Status" Content={() => <Status />} />
      <FilterTab title="Products" Content={() => <Products />} />
      <FilterTab title="Creation Date" Content={() => <CreationDate />} />
      <FilterTab title="Number Of Users" Content={() => <NumberOfUsers />} />
    </div>
  );
}

export default Filters;
