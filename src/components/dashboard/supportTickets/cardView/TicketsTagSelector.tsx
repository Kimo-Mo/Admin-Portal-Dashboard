import { Select } from 'antd';

function TicketsTagSelector({ values }: { values: string[] }) {
  const selectionOptions = values.map((item) => ({
    value: item,
    label: <span>{item}</span>,
  }));
  return (
    <div className="">
      {/* // use state and onChange to handle the selection */}
      <Select
        options={selectionOptions}
        defaultValue={selectionOptions[0].value}
        style={{
          height: '2.3rem',
          borderRadius: '0.75rem',
          backgroundColor: '#fff',
        }}
        // search for this method
        className="[>_.ant-select-selector]:bg-amber-700"
      />
    </div>
  );
}

export default TicketsTagSelector;
