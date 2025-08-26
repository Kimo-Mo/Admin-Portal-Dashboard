import { Drawer, Input, Select, Button, Form, message, Steps, DatePicker } from 'antd';
import { Box, Building, CloseCircle, Export, User } from 'iconsax-reactjs';
import { useState, useCallback, useMemo } from 'react';
import type { FormInstance, Rule } from 'antd/es/form';

interface CreateOrgDrawerProps {
  createOrgDrawer: boolean;
  onClose: () => void;
}

interface FormFieldConfig {
  name: string;
  label: string;
  placeholder: string;
  type?: 'input' | 'select' | 'date';
  rules?: Rule[];
  options?: { label: string; value: string }[];
}

interface StepConfig {
  title: string;
  icon: React.ReactNode;
  fields: FormFieldConfig[];
}

const OWNER_INFO_FIELDS: FormFieldConfig[] = [
  {
    name: 'firstName',
    label: 'First Name',
    placeholder: 'Enter First Name',
    rules: [{ required: true, message: 'First name is required' }],
  },
  {
    name: 'lastName',
    label: 'Last Name',
    placeholder: 'Enter Last Name',
    rules: [{ required: true, message: 'Last name is required' }],
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter Email',
    rules: [
      { required: true, message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid email' },
    ],
  },
  {
    name: 'phoneNumber',
    label: 'Phone Number',
    placeholder: 'Enter Phone Number',
    rules: [{ required: true, message: 'Phone number is required' }],
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter Password',
    rules: [
      { required: true, message: 'Password is required' },
      { min: 8, message: 'Password must be at least 8 characters' },
    ],
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Confirm Password',
    rules: [
      { required: true, message: 'Please confirm your password' },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('Passwords do not match'));
        },
      }),
    ],
  },
];

const ORGANIZATION_INFO_FIELDS: FormFieldConfig[] = [
  {
    name: 'companyName',
    label: 'Company Name',
    placeholder: 'Enter Company Name',
    rules: [{ required: true, message: 'Company name is required' }],
  },
  {
    name: 'industry',
    label: 'Industry',
    placeholder: 'Enter Industry',
    rules: [{ required: true, message: 'Industry is required' }],
  },
  {
    name: 'domainUrl',
    label: 'Domain URL',
    placeholder: 'Enter Domain URL',
    rules: [
      { required: true, message: 'Domain URL is required' },
      { type: 'url', message: 'Please enter a valid URL' },
    ],
  },
  {
    name: 'domainsNumber',
    label: 'Domains Number',
    placeholder: 'Enter Domains Number',
    rules: [{ required: true, message: 'Number of domains is required' }],
  },
  {
    name: 'employeeSize',
    label: 'Employee Size',
    placeholder: 'Enter Employee Size',
    rules: [{ required: true, message: 'Employee size is required' }],
  },
  {
    name: 'purpose',
    label: 'Purpose of Organization',
    placeholder: 'Enter Purpose of Organization',
    rules: [{ required: true, message: 'Purpose is required' }],
  },
];

const PACKAGE_INFO_FIELDS: FormFieldConfig[] = [
  {
    name: 'package',
    label: 'Package',
    placeholder: 'Select Package',
    type: 'select',
    rules: [{ required: true, message: 'Package selection is required' }],
    options: [
      { label: 'Basic', value: 'basic' },
      { label: 'Standard', value: 'standard' },
      { label: 'Premium', value: 'premium' },
    ],
  },
  {
    name: 'startDate',
    label: 'Start Date',
    placeholder: 'Select Start Date',
    type: 'date',
    rules: [{ required: true, message: 'Start date is required' }],
  },
  {
    name: 'endDate',
    label: 'End Date',
    placeholder: 'Select End Date',
    type: 'date',
    rules: [{ required: true, message: 'End date is required' }],
  },
  {
    name: 'initialCategories',
    label: 'Initial Categories',
    placeholder: 'Select Categories',
    type: 'select',
    rules: [{ required: true, message: 'Categories selection is required' }],
    options: [
      { label: 'Technology', value: 'technology' },
      { label: 'Finance', value: 'finance' },
      { label: 'Healthcare', value: 'healthcare' },
      { label: 'Education', value: 'education' },
    ],
  },
  {
    name: 'assignedProducts',
    label: 'Assigned Products',
    placeholder: 'Enter assigned products',
    rules: [{ required: true, message: 'Assigned products are required' }],
  },
];

const STEPS_CONFIG: StepConfig[] = [
  {
    title: 'Owner Info',
    icon: <User />,
    fields: OWNER_INFO_FIELDS,
  },
  {
    title: 'Organization Info',
    icon: <Building />,
    fields: ORGANIZATION_INFO_FIELDS,
  },
  {
    title: 'Package Info',
    icon: <Box />,
    fields: PACKAGE_INFO_FIELDS,
  },
];

const FormStep = ({ fields, form }: { fields: FormFieldConfig[]; form: FormInstance }) => {
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
        inputComponent = (
          <Input placeholder={placeholder} type={name.includes('password') ? 'password' : 'text'} />
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
    <Form
      size="large"
      layout="vertical"
      form={form}
      style={{ backgroundColor: 'var(--c-background)', maxWidth: 'none', border: 'none' }}>
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
    </Form>
  );
};

const CreateOrgDrawer = ({ createOrgDrawer, onClose }: CreateOrgDrawerProps) => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleNext = useCallback(async () => {
    try {
      const currentStepFields = STEPS_CONFIG[current].fields.map((field) => field.name);
      await form.validateFields(currentStepFields);
      setCurrent((prev) => prev + 1);
    } catch {
      message.error('Please fill in all required fields correctly');
    }
  }, [current, form]);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => prev - 1);
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      console.log('Form values:', values);

      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      message.success('Organization created successfully!');
      form.resetFields();
      setCurrent(0);
      onClose();
    } catch {
      message.error('Failed to create organization. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [form, onClose]);

  const stepsItems = useMemo(
    () =>
      STEPS_CONFIG.map((step) => ({
        title: step.title,
        icon: step.icon,
      })),
    []
  );

  const currentStepContent = useMemo(
    () => <FormStep fields={STEPS_CONFIG[current].fields} form={form} />,
    [current, form]
  );

  return (
    <Drawer
      width={543}
      destroyOnHidden
      title={
        <h1 className="text-base font-semibold flex items-center justify-between">
          Create New Organization <Export className="text-text/50" />
        </h1>
      }
      closeIcon={<CloseCircle />}
      closable={{ 'aria-label': 'Close Button' }}
      onClose={onClose}
      open={createOrgDrawer}
      classNames={{
        header: '*:flex-row-reverse bg-background',
        body: 'bg-background flex flex-col gap-13',
      }}
      styles={{
        header: { borderBottom: '1px solid var(--c-border)', padding: '1rem' },
        body: {
          scrollbarWidth: 'thin',
          scrollbarGutter: 'stable',
          paddingInline: '1rem',
          paddingBlock: '0.75rem',
        },
      }}>
      <Steps current={current} items={stepsItems} labelPlacement="vertical" />
      <div>{currentStepContent}</div>
      <div className="flex items-center justify-end gap-2">
        {current > 0 && (
          <Button size="large" onClick={handlePrev} disabled={loading}>
            Previous
          </Button>
        )}
        {current === STEPS_CONFIG.length - 1 ? (
          <Button type="primary" size="large" loading={loading} onClick={handleSubmit}>
            Create Organization
          </Button>
        ) : (
          <Button type="primary" size="large" onClick={handleNext}>
            Next
          </Button>
        )}
      </div>
    </Drawer>
  );
};

export default CreateOrgDrawer;
