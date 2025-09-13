import { Select } from 'antd';

function TicketsTagSelector({ values }: { values: string[] }) {
  const selectionOptions = values.map((item) => ({
    value: item,
    label: <span>{item}</span>,
  }));
  return (
    <Select
      options={selectionOptions}
      defaultValue={selectionOptions[0].value}
      style={{
        height: '2.3rem',
        borderRadius: '0.75rem',
      }}
    />
  );
}

export default TicketsTagSelector;
