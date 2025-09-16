import { Select } from 'antd';
import { ArrowDown2 } from 'iconsax-reactjs';
import { useState } from 'react';
type Status = 'High' | 'Medium' | 'Low' | 'Pending' | 'In Progress' | 'Ignored' | 'Closed';
const selectStatusClasses: Record<Status, string> = {
  High: `
    [&_.ant-select-selector]:!border-danger/30
    [&_.ant-select-selector]:!bg-danger/20
    [&_.ant-select-selector]:!text-danger
  `,
  Medium: `
    [&_.ant-select-selector]:!border-warning/30
    [&_.ant-select-selector]:!bg-warning/20
    [&_.ant-select-selector]:!text-warning
  `,
  Low: `
    [&_.ant-select-selector]:!border-success/30
    [&_.ant-select-selector]:!bg-success/20
    [&_.ant-select-selector]:!text-success
  `,
  Pending: `
    [&_.ant-select-selector]:!border-primary/30
    [&_.ant-select-selector]:!bg-primary/20
    [&_.ant-select-selector]:!text-primary
  `,
  'In Progress': `
    [&_.ant-select-selector]:!border-success/30
    [&_.ant-select-selector]:!bg-success/20
    [&_.ant-select-selector]:!text-success
  `,
  Ignored: `
    [&_.ant-select-selector]:!border-secondary/30
    [&_.ant-select-selector]:!bg-secondary/20
    [&_.ant-select-selector]:!text-secondary
  `,
  Closed: `
    [&_.ant-select-selector]:!border-prospective/30
    [&_.ant-select-selector]:!bg-prospective/20
    [&_.ant-select-selector]:!text-prospective
  `,
};
function TicketsTagSelector({
  values,
  defaultValue = values[0],
}: {
  values: Status[];
  defaultValue?: Status;
}) {
  const [value, setValue] = useState(defaultValue || values[0]);
  const selectionOptions = values.map((item) => ({
    value: item,
    label: (
      <span className="flex items-center justify-center gap-0.5">
        {item} {<ArrowDown2 size={16} />}
      </span>
    ),
  }));

  return (
    <div className="">
      <Select
        onChange={(val) => setValue(val)}
        options={selectionOptions}
        defaultValue={defaultValue}
        style={{
          height: '2.3rem',
          borderRadius: '0.75rem',
          border: 'none',
          minWidth: '7rem',
          maxWidth: '7rem',
        }}
        suffixIcon={null}
        className={`${selectStatusClasses[`${value}`]} [&_.ant-select-selector]:!shadow-none`}
      />
    </div>
  );
}

export default TicketsTagSelector;
