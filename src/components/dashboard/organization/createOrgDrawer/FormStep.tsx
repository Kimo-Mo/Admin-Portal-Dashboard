import { DatePicker, Form, Input, Select } from 'antd';
import type { FormFieldConfig } from './StepFields';

const FormStep = ({ fields }: { fields: FormFieldConfig[] }) => {
  const renderField = (field: FormFieldConfig) => {
    const { name, label, placeholder, type = 'input', rules, options } = field;

    let inputComponent;
    switch (type) {
      case 'select':
        inputComponent = <Select placeholder={placeholder} options={options} />;
        break;
      case 'date':
        inputComponent = <DatePicker placeholder={placeholder} className="w-full" />;
        break;
      default:
        inputComponent =
          name.includes('password') || name.includes('confirmPassword') ? (
            <Input.Password placeholder={placeholder} />
          ) : (
            <Input placeholder={placeholder} type={type} />
          );
    }

    return (
      <Form.Item key={name} name={name} label={label} rules={rules}>
        {inputComponent}
      </Form.Item>
    );
  };

  // Handle date fields in a flex container
  const dateFields = fields.filter((field) => field.type === 'date');
  const nonDateFields = fields.filter((field) => field.type !== 'date');

  return (
    <div style={{ backgroundColor: 'var(--c-background)' }}>
      {nonDateFields.map(renderField)}
      {dateFields.length > 0 && (
        <div className="flex gap-3">
          {dateFields.map((field) => (
            <div key={field.name} className="flex-1">
              {renderField(field)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormStep;
