import AppliedFilter from './filterDetails/AppliedFilter';

function FiltersDetails() {
  return (
    <div className="flex gap-2 items-center ps-6 pb-2 ">
      <h1>Applied Filters:</h1>
      <AppliedFilter title="status" />
      <AppliedFilter title="creation date" />
      <h4 className="decoration-solid underline cursor-pointer font-normal text-sm underline-offset-4 ">
        Clear filters
      </h4>
    </div>
  );
}

export default FiltersDetails;
