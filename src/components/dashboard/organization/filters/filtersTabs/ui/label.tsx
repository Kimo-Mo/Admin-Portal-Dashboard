import { Checkbox, type CheckboxProps } from 'antd';
import './customCheckbox.css';

function FilterLabel({ title }: { title: string }) {
  const onChange: CheckboxProps['onChange'] = () => {};

  return (
    <div>
      <div
        className="flex items-center space-x-1.5 rounded-sm font-light text-[0.8125rem] bg-card min-h-5 py-0.5 px-2"
        onChange={onChange}>
        <Checkbox name="checkbox">{title}</Checkbox>
      </div>
    </div>
  );
}

export default FilterLabel;
